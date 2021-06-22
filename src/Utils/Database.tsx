import { ConstructingHypotheses } from './GenerateHypotheses'

const constructQuery = (defectContext: DefectContext): string => {
    return 'defectContext'
}

export const searchForPotentialHypotheses = async (
    defectContext: DefectContext
): Promise<Array<Hypothesis>> => {
    // mocking the database here.
    const query = constructQuery(defectContext) // construct the query.
    const rowHypotheses = await new Promise((resolve) =>
        setTimeout(
            () =>
                resolve([
                    {
                        title: 'Incorrect usage of useState API',
                        hypothesis: `You are updating the program state by modifying the array/object in
                         place and passing the same but modified state to the useState API.`,
                        test: [
                            {
                                item: 'Store reference to the old and new state',
                                code: undefined,
                            },
                            {
                                item: `check the equality of of the old and new state by strictly comparing 
                                    the two state`,
                                code: `console.assert(oldState !== newState)`,
                            },
                            {
                                item: `If the assertion fail, then this hypothesis may be correct.`,
                                code: undefined,
                            },
                        ],
                        evidence: [
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
                            {
                                type: 'AST',
                                value: {
                                    functionName: 'containsNode',
                                },
                                shouldBeThere: false,
                                location: 'lib',
                            },
                            {
                                type: 'AST',
                                value: {
                                    functionName: 'bailoutHooks',
                                },
                                shouldBeThere: true,
                                location: 'lib',
                            },
                        ],
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
                    },
                ]),
            500
        )
    )
    return ConstructingHypotheses(rowHypotheses)
}
