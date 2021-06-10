import * as React from 'react'
import './App.css'
import Button from '@material-ui/core/Button'
import { endProfiler, startProfiler } from '../devtools/profiler'

const Recorder: any = (props: any): React.ReactElement => {
    const [isRecording, setRecordingState] = React.useState<boolean>(false)

    const recorder = async (): Promise<void> => {
        if (isRecording) {
            const coverage: any = await endProfiler()
            props.context(coverage)
        } else {
            await startProfiler()
        }
        setRecordingState(!isRecording)
    }
    return (
        <div className="Record">
            {isRecording ? (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={recorder}
                >
                    Stop
                </Button>
            ) : (
                <Button variant="contained" color="primary" onClick={recorder}>
                    Record
                </Button>
            )}
        </div>
    )
}

export default Recorder
