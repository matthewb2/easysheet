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

  const template = [
    {
      label: '파일(&F)',
      submenu: [
        {
          label: '열기(&O)',
          accelerator: 'CmdOrCtrl+O',
          click: () => {
            if (mainWindow && mainWindow.webContents) {
              mainWindow.webContents.send('trigger-open-csv');
            }
          }
        },
        {
          label: '저장(&S)',
          accelerator: 'CmdOrCtrl+S',
          click: () => {
            if (mainWindow && mainWindow.webContents) {
              mainWindow.webContents.send('trigger-save-csv');
            }
          }
        },
        {
          label: '다른 이름으로 저장(&A)',
          accelerator: 'CmdOrCtrl+Shift+S',
          click: () => {
            if (mainWindow && mainWindow.webContents) {
              mainWindow.webContents.send('trigger-save-as-csv');
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

// ----- IPC: CSV 파일 열기 -----
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
  return { fileName: path.basename(filePath), filePath, content };
});

// ----- IPC: CSV 저장 (다른 이름으로 저장 다이얼로그) -----
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

// ----- IPC: CSV 저장 (열어둔 파일에 덮어쓰기) -----
ipcMain.handle('write-csv', async (event, filePath, csvContent) => {
  try {
    fs.writeFileSync(filePath, csvContent, 'utf-8');
    return { success: true, filePath };
  } catch (error) {
    console.error('CSV 덮어쓰기 중 오류:', error);
    return { success: false, error: error.message };
  }
});