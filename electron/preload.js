const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // CSV 파일 열기 다이얼로그 호출
  openCsv: () => ipcRenderer.invoke('open-csv'),

  // CSV 저장 다이얼로그 호출 (다른 이름으로 저장)
  saveCSV: (csvContent) => ipcRenderer.invoke('save-csv-dialog', csvContent),

  // 열어둔 파일 경로에 덮어쓰기
  writeCsv: (filePath, csvContent) => ipcRenderer.invoke('write-csv', filePath, csvContent),

  // 메뉴에서 전달되는 트리거 이벤트 수신
  onOpenFile: (callback) => ipcRenderer.on('trigger-open-csv', () => callback()),
  onSaveCSV: (callback) => ipcRenderer.on('trigger-save-csv', () => callback()),
  onSaveAsCSV: (callback) => ipcRenderer.on('trigger-save-as-csv', () => callback())
});