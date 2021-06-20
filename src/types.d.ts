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

type step = {
    item: string
    code: string
}
type EvidenceOfHypothesis = {
    type: 'API' | 'AST'
    value: string
    shouldBeThere: boolean
    location: 'userLand' | 'lib'
}
type potentialFix = {
    context?: Array<EvidenceOfHypothesis>
    steps: Array<step>
}
type Hypothesis = {
    title: string
    description: string
    test: Array<step>
    evidence: Array<EvidenceOfHypothesis>
    potentialFixes: Array<potentialFix>
}

type HypothesisCard = {
    Hypothesis: Hypothesis
    index: number
}
