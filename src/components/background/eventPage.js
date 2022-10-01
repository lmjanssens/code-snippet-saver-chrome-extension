/*global chrome*/
var contextMenuItem = {
    "id": "snippetSaver",
    "title": "Save snippet",
    "contexts": ['page', "selection", "image", "link"]
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create(contextMenuItem);
});

chrome.contextMenus.onClicked.addListener( (clickData) => {
    if(clickData.menuItemId === "snippetSaver"){
        console.log('You selected this text: ' + clickData.selectionText)
    }
});