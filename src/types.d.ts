type MethodCoverage = {
    method: string
    start: number
    end: number
    file: string
}
type MethodCoverageProps = {
    coverage: Array<MethodCoverage>
}
type DefectContext = MethodCoverageProps & {
    userReport: string
}

type RecorderProps = {
    setMethodCoverage: React.Dispatch<React.SetStateAction<MethodCoverage[]>>
}

type Hypothesis = {
    title: string
    description: string
    debuggingAids: Array<DebuggingAid>
}
type DebuggingAid = {
    context?: Array<SourceCodeEvidence>
    aidType:
        | 'Testing Strategies'
        | 'Potential Fixes'
        | 'Online Resources'
        | 'Evidence'
    steps: Array<Step>
}
type SourceCodeEvidence = {
    type: 'API' | 'AST'
    value: string
    shouldBeThere: boolean
    location: 'userLand' | 'lib'
}
type Step = {
    item: string
    code?: {
        syntax: string
        location?: {
            lineNumber: number
            fileName: string
            functionName: string
        }
    }
}
type HypothesisCardProps = {
    Hypothesis: Hypothesis
    index: number
}
