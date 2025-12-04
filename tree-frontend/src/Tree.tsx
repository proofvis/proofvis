// Tree.tsx
import React from 'react'
import TreeItem from './TreeItem'

// The shape produced by your `walk` function:
// { id: string; name: string; children: TreeNode[] }
export interface TreeNode {
  id: string
  name: string
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
  return (
    <div>
      {/* One linear "row" per node */}
      <div style={{ marginLeft: depth * 20 }}>
        {/* Assume TreeItem is a simple div-like component */}
        <TreeItem>
          {node.name}
        </TreeItem>
      </div>

      {/* Recurse on children */}
      {node.children.map((child) => (
        <Tree key={child.id} node={child} depth={depth + 1} />
      ))}
    </div>
  )
}

export default Tree
