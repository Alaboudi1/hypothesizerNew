export const initializeHypothesizer = (): void => {
    chrome.runtime.connect({
        name: 'Hypothesizer',
    })
}
