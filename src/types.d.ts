type MethodCoverage = {
    method: string
    start: number
    end: number
    file: string
}

type MethodCoverageProps = {
    coverage: Array<MethodCoverage>
}

type RecorderProps = {
    setMethodCoverage: React.Dispatch<React.SetStateAction<MethodCoverage[]>>
}

type TestHypothesis = {
    item: string,
    code: string,
}
type EvidenceOfHypothesis = {
    type: 'API' | 'AST',
    value: string,
    shouldBeThere: boolean,
    location: 'userLand' | 'lib'
}
type Hypotheses = {

    {
        title: string,
        hypothesis: string,
        test: Array<TestHypothesis>,
        evidence: Array<EvidenceOfHypothesis>,
        potentialFixes: [
            {
                context: [
                    {
                        type: 'API',
                        value: 'splice',
                        shouldBeThere: true,
                        location: 'userLand',
                    },
                    {
                        type: 'API',
                        value: 'indexOf',
                        shouldBeThere: true,
                        location: 'userLand',
                    },
                ],
            },
        ],
    }
}