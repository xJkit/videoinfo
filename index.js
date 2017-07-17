const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electron;
const { ffprobe } = ffmpeg;

let mainWindow; // keep mainWindow global

app.on('ready', () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', (evt, path) => {
  ffprobe(path, (err, metadata) => {
    console.log('video length: ', metadata.format.duration);
    mainWindow.webContents.send('video:metadata', metadata.format.duration);
  });
});