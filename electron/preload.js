const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openCsv: () => ipcRenderer.invoke('open-csv')
});
