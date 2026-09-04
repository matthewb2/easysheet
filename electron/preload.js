const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openCsv: () => ipcRenderer.invoke('open-csv'),
  saveCSV: (csvContent) => ipcRenderer.invoke('save-csv-dialog', csvContent),
  onSaveCSV: (callback) => {
    ipcRenderer.on('trigger-save-csv', () => callback());
  }
});
