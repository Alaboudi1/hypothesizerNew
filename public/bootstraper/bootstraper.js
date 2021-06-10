/* eslint-disable no-undef */
// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area
chrome.devtools.panels.create('Hypothesizer', null, 'hypothesizer.html', () => {});
