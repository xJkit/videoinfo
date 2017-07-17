# Video Info Desktop App built from Electron

僅以簡單的 Web Page 來展示如何使用 `Electron` 來開發桌面應用程式。

Electron App                | <----IPC------->                    | MainWindow
----------------------------|-------------------------------------|------------------
ipcMain.on                  | <--- I need info about this video-- | ipcRenderer.send
mainWindow.webContents.send | -- Ok, here's what I found --->     | ipcRenderer.on