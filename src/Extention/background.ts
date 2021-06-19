// This file is ran as a background script
chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any) => {
    chrome.tabs.sendMessage(tabs[0].id, { greeting: 'hello' }, (response) => {
        console.log(response)
    })
})
