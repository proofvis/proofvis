// src/Tree.tsx
import React2, { useState as useState2 } from "react";

// src/TreeItem.tsx
import { useState } from "react";
function TreeItem({ proof_state, next_tactic }) {
  const [open, setOpen] = useState(false);
  const hypothesesComponents = proof_state.hypotheses.map((h) => {
    return /* @__PURE__ */ React.createElement("li", null, "Hypothesis: ", h);
  });
  const bg = open ? "oklch(86.5% 0.127 207.078)" : "oklch(60.9% 0.126 221.723)";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", { htmlFor: "expanded" }, next_tactic), /* @__PURE__ */ React.createElement("button", { style: { backgroundColor: bg, padding: "0.3rem" }, onClick: () => setOpen(!open) }, "Expand"), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "1rem" } }, /* @__PURE__ */ React.createElement("ul", { hidden: !open }, /* @__PURE__ */ React.createElement("li", null, "Goal: ", proof_state.goal), hypothesesComponents)));
}
var TreeItem_default = TreeItem;

// src/Tree.tsx
var Tree = ({ node, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState2(true);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("div", { style: { marginLeft: depth * 2 + "rem" } }, /* @__PURE__ */ React2.createElement("button", { onClick: toggleCollapse, style: {} }, /* @__PURE__ */ React2.createElement("span", null, isOpen ? "\u25BC" : "\u25B6"), " "), /* @__PURE__ */ React2.createElement(TreeItem_default, { proof_state: node.proof_state, next_tactic: node.next_tactic })), /* @__PURE__ */ React2.createElement("div", { hidden: !isOpen }, node.children.map((child, i) => /* @__PURE__ */ React2.createElement(Tree, { key: child.next_tactic + "/" + depth + "/" + i, node: child, depth: depth + 1 }))));
};
var Tree_default = Tree;

// src/ProofVis.tsx
function ProofVis({ lean_tree_string }) {
  return /* @__PURE__ */ React.createElement(Tree_default, { node: JSON.parse(lean_tree_string) });
}
var ProofVis_default = ProofVis;
export {
  ProofVis_default as default
};
