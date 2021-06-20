import * as React from 'react'
import './App.css'
import { ReactElement } from 'react'
import LoadingButton from '@material-ui/lab/LoadingButton'
import Search from '@material-ui/icons/Search'
import { Trace } from './Context/Trace'
import Recorder from './Context/Recorder'
import { Questions } from './Context/Questions'
import { searchForPotentialHypotheses } from '../Utils/Database'
import { HypothesisCard } from './Hypotheses/HypothesisCard'

const searchForHypotheses = async (
    userReports: unknown,
    methodCoverage: unknown,
    setLoading: any,
    setHypotheses: any
): Promise<any> => {
    // connect to a database and query for potential hypotheses
    setLoading(true)
    const result: unknown = await searchForPotentialHypotheses({
        userReports,
        methodCoverage,
    })
    setLoading(false)
    setHypotheses(result)
}
const useContext = (
    methodCoverage: Array<MethodCoverage>,
    userReports: unknown,
    setUserReports: unknown,
    setHypotheses: unknown
): ReactElement => {
    const [loading, setLoading] = React.useState(false)

    if (methodCoverage.length >= 0) {
        return (
            <>
                <Trace coverage={methodCoverage} />
                <Questions setDefectContext={setUserReports} />

                <LoadingButton
                    variant="contained"
                    loading={loading}
                    loadingPosition="start"
                    color="primary"
                    size="large"
                    startIcon={<Search />}
                    onClick={() =>
                        searchForHypotheses(
                            userReports,
                            methodCoverage,
                            setLoading,
                            setHypotheses
                        )
                    }
                >
                    Search For Hypotheses
                </LoadingButton>
            </>
        )
    }
    return <></>
}

export const App: React.FC = (): React.ReactElement => {
    const [methodCoverage, setMethodCoverage] = React.useState<
        Array<MethodCoverage>
    >([])
    const [userReports, setUserReports] = React.useState<Array<unknown>>([])
    const [hypotheses, setHypotheses] = React.useState<Array<Hypothesis>>([])

    return (
        <div className="App">
            <h1>Gathering defect context</h1>
            <h3> Please click RECORD button and reproduce the defect.</h3>
            <Recorder setMethodCoverage={setMethodCoverage} />
            {useContext(
                methodCoverage,
                userReports,
                setUserReports,
                setHypotheses
            )}
            <div className="Hypotheses">
                {hypotheses.map((hypothesis, index) => (
                    <HypothesisCard Hypothesis={hypothesis} index={index + 1} />
                ))}
            </div>
        </div>
    )
}
