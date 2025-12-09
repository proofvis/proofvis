import Tree from "./Tree";


function ProofVis({ lean_tree_string } : { lean_tree_string: string }) {
    return <Tree node={JSON.parse(lean_tree_string)} />
}

export default ProofVis;