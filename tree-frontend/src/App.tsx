import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const tree = {
    "proof_state": {"hypotheses": [], "goal": "P \/ Q -> Q \/ P"},
    "next_tactic": "intros H",
    "children": [
      {
        "proof_state": { "hypotheses": ["P \/ Q"], "goal": "Q \/ P" },
        "next_tactic": "cases H",
        "children": [
          {
            "proof_state": { "hypotheses": ["P"], "goal": "Q \/ P" },
            "next_tactic": "right",
            "children": []
          },
          {
            "proof_state": { "hypotheses": ["Q"], "goal": "Q \/ P" },
            "next_tactic": "left",
            "children": []
          }
        ]
      }
    ]
  };

  return (
    <>
      <p>This will be a tree-view!</p>
    </>
  )
}

export default App
