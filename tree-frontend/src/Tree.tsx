// Tree.tsx
import React, { useState } from 'react'
import TreeItem from './TreeItem'

// The shape produced by your `walk` function:
// { id: string; name: string; children: TreeNode[] }
export interface TreeNode {
  proof_state: {
    hypotheses: string[],
    goal: string
  }
  next_tactic: string
  children: TreeNode[]
}

interface TreeProps {
  node: TreeNode
  depth?: number
}

/**
 * Recursive tree that renders a TreeItem at each level
 * and then its children, indented.
 */
const Tree: React.FC<TreeProps> = ({ node, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {/* One linear "row" per node */}
      <div style={{ marginLeft: depth * 20 }}>
        {/* Assume TreeItem is a simple div-like component */}
        <button onClick={toggleCollapse} style={{}}>
          <span>{isOpen ? '▼' : '▶'}</span> {/* Down arrow */}
        </button>
        <TreeItem proof_state={node.proof_state} next_tactic={node.next_tactic} />
      </div>

      {/* Recurse on children */}
      <div hidden={!isOpen}>
        {node.children.map((child, i) => (
          <Tree key={child.next_tactic + "/" + depth + "/" + i} node={child} depth={depth + 1} />
        ))}
      </div>
    </div>
  )
}

export default Tree
