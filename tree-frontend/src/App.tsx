import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tree from './Tree';
import ProofVis from './ProofVis';

function App() {
  // const tree = JSON.parse(lean_tree_string);

  function tree_to_graph(_tree: any) {
    // function add_coordinates_to_tree(tree: any) { // TODO: jlee: not sure if this is proper JS or anything but this should give an idea for the algorithm I was trying for
    //   function add_depths_to_tree(node: any, depth: any) {
    //     node["depth"] = depth;
    //     for (let child in node["children"]) {
    //       add_depths_to_tree(child, depth + 1);
    //     }
    //   }
    //   add_depths_to_tree(tree, 0)

    //   function add_widths_to_tree(node: any) {
    //     if (node["children"].length === 0) {
    //       node["width"] = 1;
    //       return;
    //     }

    //     let width = 0;
    //     for (let child in node["children"]) {
    //       add_widths_to_tree(child);
    //       width += child["width"];
    //     }
    //     node["width"] = width
    //   }
    //   add_widths_to_tree(tree);

    //   function add_x_offset_to_tree(node: any) {
    //     if (node["children"].length != 0) {
    //       let cum_width = 0;
    //       for (let child in node["children"]) {
    //         add_x_offset_to_tree(child);
    //         child["x_offset"] = cum_width;
    //         cum_width += child["width"];
    //       }
    //     }
    //   }
    //   tree["x_offset"] = 0;
    //   add_x_offset_to_tree(tree);
    // }

    return {
      nodes: [
        { id: '1', position: { x: 100, y: 100 }, data: {
          "proof_state": {"hypotheses": [], "goal": "P \/ Q -> Q \/ P"},
          "next_tactic": "intros H",
        } },
        { id: '2', position: { x: 100, y: 200 }, data: {
          "proof_state": { "hypotheses": ["P \/ Q"], "goal": "Q \/ P" },
          "next_tactic": "cases H",
        } },
        { id: '3', position: { x: 100, y: 300 }, data: {
          "proof_state": { "hypotheses": ["P"], "goal": "Q \/ P" },
          "next_tactic": "right",
        } },
        { id: '4', position: { x: 200, y: 300 }, data: {
          "proof_state": { "hypotheses": ["Q"], "goal": "Q \/ P" },
            "next_tactic": "left",
        } },
      ],
      edges: [
        { id: 'e1-2', source: 1, target: 2 },
        { id: 'e2-3', source: 2, target: 3 },
        { id: 'e2-4', source: 2, target: 4 },
      ],
    };
  }
  
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
      <ProofVis lean_tree_string={JSON.stringify(tree)} />
    </>
  )
}



export default App
