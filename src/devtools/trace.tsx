const activeTab: number = chrome.devtools.inspectedWindow.tabId
let backgroundPageConnection: chrome.runtime.Port

const initializeHypothesizer = (): void => {
    backgroundPageConnection = chrome.runtime.connect({
        name: 'Hypothesizer',
    })
}

const startProfiler = (): void => {
    chrome.debugger.attach({ tabId: activeTab }, '1.2', () => {
        chrome.debugger.sendCommand(
            { tabId: activeTab },
            'Profiler.enable',
            undefined,
            () => {
                chrome.debugger.sendCommand(
                    { tabId: activeTab },
                    'Profiler.start',
                    undefined,
                    () => {
                        chrome.debugger.sendCommand(
                            { tabId: activeTab },
                            'Profiler.startPreciseCoverage',
                            { callCount: true, detailed: true }
                        )
                    }
                )
            }
        )
    })
}

const endProfiler = (): Promise<unknown> => {
    return new Promise((resolve) =>
        chrome.debugger.sendCommand(
            { tabId: activeTab },
            'Profiler.takePreciseCoverage',
            undefined,
            (response: any) => {
                chrome.debugger.sendCommand(
                    { tabId: activeTab },
                    'Profiler.stopPreciseCoverage',
                    undefined,
                    () => {
                        chrome.debugger.sendCommand(
                            { tabId: activeTab },
                            'Profiler.stop',
                            undefined,
                            () => {
                                chrome.debugger.sendCommand(
                                    { tabId: activeTab },
                                    'Profiler.disable',
                                    undefined,
                                    () => {
                                        const methodCoverage = response.result
                                            .filter((file: any) =>
                                                file.url.includes('localhost')
                                            )
                                            .map((file: any) =>
                                                file.functions.filter(
                                                    (func: any) =>
                                                        func.isBlockCoverage
                                                )
                                            )
                                            .flat()
                                        return resolve(methodCoverage)
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    )
}
export { startProfiler, endProfiler, initializeHypothesizer }
