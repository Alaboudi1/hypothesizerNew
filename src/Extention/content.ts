// This file is injected as a content script

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request, sender, sendResponse)
    sendResponse(`Hello from content script!${JSON.stringify('request')}`)
})
