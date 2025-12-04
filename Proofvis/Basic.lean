import Lean

open Lean Widget

@[widget_module]
def helloWidget : Widget.Module where
  javascript := include_str ".." / "widget" / "src" / "basic.js"

#widget helloWidget
