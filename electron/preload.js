const { contextBridge, ipcRenderer } = require('electron');

// 렌러러 프로세스에서 window.electronAPI를 통해 안전하게 접근할 수 있도록 노출
contextBridge.exposeInMainWorld('electronAPI', {
  // 데스크톱 파일 시스템 연동 등을 위한 IPC 통신 예시 함수
  saveFile: (data) => ipcRenderer.invoke('save-file', data),
  loadFile: () => ipcRenderer.invoke('load-file')
});