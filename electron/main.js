const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.loadFile(path.join(__dirname, '../index.html'));
  // mainWindow 생성 직후 추가
  // 개발자 도구를 오픈
  //mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
  
});