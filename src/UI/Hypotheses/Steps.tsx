import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import './Steps.css'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { CopyBlock, dracula } from 'react-code-blocks'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'

export const Steps: React.FC<DebuggingAid> = ({
    aidType,
    steps,
}): React.ReactElement => {
    return (
        <CardActions className="Step">
            <Accordion className="Accordion">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{aidType}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <CopyBlock
                            text={steps[1].code}
                            language="jsx"
                            showLineNumbers={false}
                            theme={dracula}
                            codeBlock
                            wrapLongLines
                        />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </CardActions>
    )
}
