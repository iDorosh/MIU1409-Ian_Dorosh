Ti.UI.setBackgroundColor('white');
var win = Ti.UI.createWindow({  
  title: 'Click window to test',
  backgroundColor: 'white',
  exitOnClose: true,
  fullscreen: false
});
win.addEventListener('click', function(e){
  var dialog = Ti.UI.createAlertDialog({
    cancel: 1,
    buttonNames: ['Confirm', 'Cancel', 'Help'],
    message: 'Would you like to delete the file?',
    title: 'Delete'
  });
  dialog.addEventListener('click', function(e){
    if (e.index === e.source.cancel){
      Ti.API.info('The cancel button was clicked');
    }
    Ti.API.info('e.cancel: ' + e.cancel);
    Ti.API.info('e.source.cancel: ' + e.source.cancel);
    Ti.API.info('e.index: ' + e.index);
  });
  dialog.show();
});
win.open();