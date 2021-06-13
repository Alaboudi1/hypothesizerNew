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
