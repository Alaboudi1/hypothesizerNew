// This function expect to get a set of hypotheses and a defect context consists of
//
export const ConstructingHypotheses = (props: {
    hypotheses: unknown
    defectContext: unknown
}): unknown => {
    return [
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
                    code: {
                        syntax: `console.assert(oldState !== newState)`,
                        location: undefined,
                    },
                },
                {
                    item: `If the assertion fail, then this hypothesis may be correct.`,
                    code: undefined,
                },
            ],
            evidence: [
                {
                    item: 'You used splice api in your code',
                    code: {
                        syntax: `
                        const index = todos.indexOf(todoToDelete);
                        if (index > -1) {
                          todos.splice(index, 1);
                        }
                        setTodos(todos);
                        `,
                        location: {
                            lineNumber: 23,
                            fileName: 'app.tsx',
                            functionName: 'deleteTodo',
                        },
                    },
                },

                {
                    item: 'The React.js library called bailoutHooks function',
                    code: {
                        syntax: `
                       
                 if (current !== null && !didReceiveUpdate) {
                     bailoutHooks(current, workInProgress, renderLanes);
                     return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
                             }
                        `,
                        location: {
                            lineNumber: 937,
                            fileName: 'ReactFiberBeginWork.new.js ',
                            functionName: 'updateForwardRef',
                        },
                    },
                },
            ],
            potentialFixes: [],
        },
    ]
}
