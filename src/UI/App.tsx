import * as React from 'react'
import './App.css'
import Button from '@material-ui/core/Button'
import { endProfiler, startProfiler } from '../devtools/trace'

const App: React.FC = (): React.ReactElement => (
    <div className="App">
        <Button variant="contained" color="primary" onClick={startProfiler}>
            Record
        </Button>
        <Button
            variant="contained"
            color="secondary"
            onClick={() => endProfiler().then((files) => console.log(files))}
        >
            Stop
        </Button>
    </div>
)

export default App
