import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import './HypothesisCard.css'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import { Steps } from './Steps'

export const HypothesisCard: React.FC<HypothesisCardProps> = ({
    Hypothesis,
    index,
}): React.ReactElement => {
    return (
        <Card className="root" key={Hypothesis.title}>
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

            {Hypothesis.debuggingAids.map((aid, i) => (
                <Steps
                    aidType={aid.aidType}
                    steps={aid.steps}
                    context={aid.context}
                    key={aid.aidType}
                />
            ))}
        </Card>
    )
}
