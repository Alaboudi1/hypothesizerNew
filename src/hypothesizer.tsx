import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './UI/App'
import './hypothesizer.css'
import { initializeHypothesizer } from './devtools/trace'

initializeHypothesizer()

const mountNode = document.getElementById('hypothesizer')
ReactDOM.render(<App />, mountNode)
