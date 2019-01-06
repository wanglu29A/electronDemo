const remote = require('electron').remote;
function OnClickedGetDialogSize() {
    const win = remote.getCurrentWindow();
    console.log("宽度" + win.getSize()[0]);
    console.log("高度" + win.getSize()[1]);
}
function OnClickedSetDialogSize() {
    const win = remote.getCurrentWindow();
    win.setSize(400, 400);
}