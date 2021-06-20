import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import './HypothesisCard.css'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { CopyBlock, dracula } from 'react-code-blocks'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'

export const HypothesisCard: React.FC<HypothesisCard> = ({
    Hypothesis,
    index,
}): React.ReactElement => {
    return (
        <Card className="root">
            <CardContent>
                <Typography gutterBottom>
                    Hypothesis {index}
                    <IconButton disabled>
                        <Badge badgeContent={3} color="error" showZero>
                            <FindInPageIcon />
                        </Badge>
                    </IconButton>
                </Typography>
                <Typography variant="h5" component="div">
                    {Hypothesis.title}
                </Typography>
                <Typography>{Hypothesis.description}</Typography>
                <Typography color="error">Evidence:</Typography>
            </CardContent>
            <CardActions className="TestHypothesis">
                <Accordion className="Accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Test this hypothesis</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <CopyBlock
                                text="console.log(oldState === newState)"
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
            <CardActions className="TestHypothesis">
                <Accordion className="Accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>How to fix the bug</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <CopyBlock
                                text="const newState= [...oldState]"
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
        </Card>
    )
}
