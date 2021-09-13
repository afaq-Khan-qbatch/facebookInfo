document.getElementById('searchbtn').onclick = () => {
    chrome.runtime.sendMessage({
        messageType: 'check Login',
    });
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.messageType === 'Not Login'){
        document.getElementById('loginMsg').innerText = 'Not Login'
    }

    if(request.messageType === 'Login'){
        document.getElementById('loginMsg').innerText = `Friends: ${request.friends}`;
    }
})