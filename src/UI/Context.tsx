import * as React from 'react'
import './App.css'
import { ObjectInspector, TableInspector } from 'react-inspector'

export const Context: any = (props: any): React.ReactElement => {
    const { context } = props
    console.log(context)
    return (
        <div>
            <ObjectInspector data={context} />
            <TableInspector data={context} />
        </div>
    )
}
