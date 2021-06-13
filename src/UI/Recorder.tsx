import * as React from 'react'
import './Recorder.css'
import Button from '@material-ui/core/Button'
import Video from '@material-ui/icons/Videocam'
import Paus from '@material-ui/icons/Pause'

import { endProfiler, startProfiler } from '../devtools/profiler'

const Recorder: React.FC<RecorderProps> = ({
    setMethodCoverage,
}): React.ReactElement => {
    const [isRecording, setRecordingState] = React.useState<boolean>(false)

    const recorder = async (): Promise<void> => {
        if (isRecording) {
            const coverage: any = await endProfiler()
            setMethodCoverage(coverage)
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
                    startIcon={<Paus />}
                    size="large"
                    className="recording"
                >
                    Recording
                </Button>
            ) : (
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={recorder}
                    startIcon={<Video />}
                >
                    Record
                </Button>
            )}
        </div>
    )
}

export default Recorder
