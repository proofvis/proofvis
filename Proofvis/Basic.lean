import Lean

open Lean Widget Elab Command

@[widget_module]
def helloWidget : Widget.Module where
  javascript := include_str ".." / "tree-frontend" / "dist" /"build.js"

-- #html <Tree aksfdj="dkafja"></Tree>

#widget helloWidget

-- #extract hello
#check True

def extract (name : Ident) : CommandElabM String := do
  return include_str ".." / "temp.json"

elab "#visualize" name:ident : command => do
  liftTermElabM do
    let wi : Expr ← elabWidgetInstanceSpec `(helloWidget)
    let wi : WidgetInstance ← evalWidgetInstance wi
    savePanelWidgetInfo wi.javascriptHash wi.props stx

theorem hello (n : Nat) : n = n := by rfl


#visualize hello
