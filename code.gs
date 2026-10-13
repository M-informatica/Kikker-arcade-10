// Code.gs - Google Apps Script Backend

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Kikker Arcade')
    .addItem('Open Biologie Spel', 'openWebsite')
    .addToUi();
}

function openWebsite() {
  var html = HtmlService.createHtmlOutputFromFile('index')
    .setWidth(1200)
    .setHeight(820)
    .setTitle('Kikker Arcade - Spijsverteringsstelsel');

  SpreadsheetApp.getUi().showModalDialog(html, 'Kikker Arcade');
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Kikker Arcade - Spijsverteringsstelsel')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}