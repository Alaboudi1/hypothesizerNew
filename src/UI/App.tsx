import * as React from 'react'
import './App.css'
import { Context } from './Context'
import Recorder from './Recorder'

const App: React.FC = (): React.ReactElement => {
    const [context, setContext] = React.useState<any[]>([])
    return (
        <div className="App">
            <Recorder context={setContext} />
            <Context context={context} />
        </div>
    )
}

export default App
