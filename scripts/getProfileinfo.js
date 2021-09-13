login = document.getElementById('loginbutton');
console.log("login ==>>  ", login);
if(login){
    console.log('not login')
    chrome.runtime.sendMessage({
        messageType: 'Not Login',
    });
}else{

    const friends = document.querySelector('[class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql oi732d6d ik7dh3pa ht8s03o8 e9vueds3 j5wam9gi b1v8xokw m9osqain"]')?.innerText;
    console.log("friends ===>>>>>   ",friends);

    chrome.runtime.sendMessage({
        messageType: 'Login',
        friends
    });

}