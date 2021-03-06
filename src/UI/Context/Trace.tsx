import * as React from 'react'
import './Trace.css'
import ReactJson from 'react-json-view'

export const Trace: React.FC<MethodCoverageProps> = ({ coverage }) => {
    if (coverage.length === 0) return <>No trace was collected!</>
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
