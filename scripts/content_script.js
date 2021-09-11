const login = document.querySelector('[name="login"]').innerText;
if(login){
    console.log('not login')
    chrome.runtime.sendMessage({
        messageType: 'Not Login',
    });
}else{
    console.log('login')
    chrome.runtime.sendMessage({
        messageType: 'Login',
    });
}