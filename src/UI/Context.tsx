import * as React from 'react'
import './App.css'
import ReactJson from 'react-json-view'

export const Context: React.FC<MethodCoverageProps> = ({ coverage }) => {
    if (coverage.length === 0) return <></>
    return (
        <div>
            <h4>Execution trace:</h4>
            <ReactJson
                src={coverage}
                theme="bright:inverted"
                collapsed
                displayDataTypes={false}
            />
        </div>
    )
}
