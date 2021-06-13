import * as React from 'react'
import './App.css'
import { Context } from './Context'
import Recorder from './Recorder'

const App: React.FC = (): React.ReactElement => {
    const [methodCoverage, setMethodCoverage] = React.useState<
        Array<MethodCoverage>
    >([])
    return (
        <div className="App">
            <h1>Gathering defect context</h1>
            <h3> Please click RECORD button and reporduce the defect.</h3>
            <Recorder setMethodCoverage={setMethodCoverage} />
            <Context coverage={methodCoverage} />
        </div>
    )
}

export default App
