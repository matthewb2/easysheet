const { app, BrowserWindow, dialog, ipcMain, Menu } = require('electron');
const path = require('path');
const fs = require('fs');

const APP_ROOT = app.getAppPath();
let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(APP_ROOT, 'electron', 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.loadFile(path.join(APP_ROOT, 'index.html'));
  mainWindow.webContents.openDevTools();

  const template = [
    {
      label: '파일',
      submenu: [
        {
          label: '저장',
          accelerator: 'CmdOrCtrl+S',
          click: () => {
            if (mainWindow && mainWindow.webContents) {
              mainWindow.webContents.send('trigger-save-csv');
            }
          }
        },
        { type: 'separator' },
        { role: 'quit', label: '종료' }
      ]
    },
    {
      label: '편집',
      submenu: [
        { role: 'undo', label: '실행 취소' },
        { role: 'redo', label: '다시 실행' },
        { type: 'separator' },
        { role: 'cut', label: '잘라내기' },
        { role: 'copy', label: '복사' },
        { role: 'paste', label: '붙여넣기' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();
});

ipcMain.handle('open-csv', async (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  const result = await dialog.showOpenDialog(win, {
    title: 'CSV 파일 열기',
    filters: [
      { name: 'CSV Files', extensions: ['csv'] },
      { name: 'All Files', extensions: ['*'] }
    ],
    properties: ['openFile']
  });

  if (result.canceled || result.filePaths.length === 0) {
    return null;
  }

  const filePath = result.filePaths[0];
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath);
  return { fileName, content };
});

ipcMain.handle('save-csv-dialog', async (event, csvContent) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  try {
    const { filePath } = await dialog.showSaveDialog(win, {
      title: '시트 저장',
      defaultPath: 'easysheet_export.csv',
      filters: [
        { name: 'CSV Files', extensions: ['csv'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    });

    if (filePath) {
      fs.writeFileSync(filePath, csvContent, 'utf-8');
      return { success: true, filePath };
    }
    return { success: false, canceled: true };
  } catch (error) {
    console.error('CSV 저장 중 오류:', error);
    return { success: false, error: error.message };
  }
});
