chrome.runtime.onInstalled.addListener(() => {
    console.log('in onIntalled');
})
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.messageType === 'check Login'){
        chrome.windows.create({
            url: "https://www.facebook.com/",
            focused: true,
            width: 950,
            height: 775,
            top: Math.round(
              (screen.height - 775) / 2
            ),
            left: Math.round(
              (screen.width - 950) / 2
            ),
            type: 'popup', setSelfAsOpener: true 
          }, ({ tabs: [newTab] }) => {
            localStorage.setItem('myTab', newTab.id);
            chrome.tabs.executeScript(newTab.id, {file: 'scripts/getProfileinfo.js'});
            setTimeout(function(){ 
                chrome.tabs.remove(newTab.id, function(){});
            }, 300000);
        });
    }
})

chrome.runtime.onUpdate.addListener((tabId) => {
    if(localStorage.getItem('myTab') === tabId){
        chrome.tabs.executeScript(tabId, {file: 'scripts/getProfileinfo.js'});
    }
})
