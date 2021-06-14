import * as React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

export const Questions: any = (): any => {
    const [reason, setReason] = React.useState<string>('')
    const [open, setOpen] = React.useState(false)

    const handleChange = (
        event: React.ChangeEvent<{ value: unknown }>
    ): void => {
        setReason(event.target.value as string)
    }

    const handleClose = (): void => {
        setOpen(false)
    }

    const handleOpen = (): void => {
        setOpen(true)
    }

    return (
        <div>
            <FormControl className="">
                <h3>
                    The program execution was supposed to produce another
                    output. Select, in general terms, what was the expected
                    output?
                </h3>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={reason}
                    onChange={handleChange}
                    placeholder="I expect that ..."
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="UI">
                        I expected that the UI to change.
                    </MenuItem>
                    <MenuItem value="State">
                        I expected that an internal program value to be
                        different.
                    </MenuItem>
                    <MenuItem value="Error">
                        I expected that the program does not produce an error or
                        crash.
                    </MenuItem>
                </Select>
                <TextField
                    style={{ margin: 8 }}
                    placeholder="Defect description"
                    helperText={undefined}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </FormControl>
        </div>
    )
}
