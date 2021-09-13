chrome.runtime.onInstalled.addListener(() => {
    console.log('in onInstalled');
})
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.messageType === 'check Login'){
        chrome.windows.create({
            url: "https://www.facebook.com/profile.php",
            focused: false,
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
            console.log('myTab', newTab.id);
            chrome.tabs.executeScript(newTab.id, {file: 'scripts/getProfileinfo.js'});
            setTimeout(function(){ 
                chrome.tabs.remove(newTab.id, function(){});
            }, 300000);
        });
    }
})

chrome.tabs.onUpdated.addListener((tabId) => {
    console.log('tab update ==>>  ' , tabId)
    console.log('tab storage ==>>  ' , localStorage.getItem('myTab'))
    if(localStorage.getItem('myTab') == tabId){
        console.log('tab storage in if  ==>>  ' , localStorage.getItem('myTab'))
        chrome.tabs.executeScript(tabId, {file: 'scripts/getProfileinfo.js'});
    }
})
