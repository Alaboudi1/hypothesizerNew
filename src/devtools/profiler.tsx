const { tabId } = chrome.devtools.inspectedWindow

type debuggingState = 'attach' | 'detach'

const sendDebuggerCommand = async (
    command: string,
    param?: Record<string, unknown>
): Promise<any> =>
    new Promise((resolve) =>
        chrome.debugger.sendCommand({ tabId }, command, param, (result: any) =>
            resolve(result)
        )
    )

const debuggingLifeCycles = (command: debuggingState): Promise<void> =>
    new Promise((resolve) =>
        command === 'attach'
            ? chrome.debugger.attach({ tabId }, '1.2', () => {
                  chrome.debugger.onDetach.addListener((d, r) => {
                      console.log('detached', d, r)
                  })
                  return resolve()
              })
            : chrome.debugger.detach({ tabId }, () => {
                  return resolve()
              })
    )

const startProfiler = async (): Promise<void> => {
    await debuggingLifeCycles('attach')
    await sendDebuggerCommand('Profiler.enable')
    await sendDebuggerCommand('Profiler.start')
    await sendDebuggerCommand('Profiler.startPreciseCoverage', {
        callCount: true,
        detailed: true,
    })
}

const endProfiler = async (): Promise<any> => {
    const response = await sendDebuggerCommand('Profiler.takePreciseCoverage')
    await sendDebuggerCommand('Profiler.stopPreciseCoverage')
    await sendDebuggerCommand('Profiler.stop')
    await sendDebuggerCommand('Profiler.disable')
    await debuggingLifeCycles('detach')

    const methodCoverage: any[] = response.result
        .filter((file: any) => file.url.includes('localhost'))
        .map((file: any) =>
            file.functions.filter((func: any) => func.isBlockCoverage)
        )
        .flat()
    return Promise.resolve(methodCoverage)
}

export { startProfiler, endProfiler }
