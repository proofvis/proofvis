import { useState } from "react";


function TreeItem({ proof_state, next_tactic } : { proof_state: { hypotheses: string[], goal: string }, next_tactic: string }) {
    const [open, setOpen] = useState(false);
    const hypothesesComponents = proof_state.hypotheses.map(h => {
        return <li>Hypothesis: {h}</li>
    });

    const bg = open ? "oklch(86.5% 0.127 207.078)" : "oklch(60.9% 0.126 221.723)";

    return (<>
            {/* it would be great to refactor this to use the HTML <details> component for accessibility */}
            {/* or one of the full fledged tree libraries in the discord */}
            <label htmlFor="expanded">{next_tactic}</label>
            <button style={{ backgroundColor: bg, padding: "0.3rem" }} onClick={() => setOpen(!open)}>Expand</button>
            <div style={{marginLeft: "1rem"}}>
                <ul hidden={!open}>
                    <li>Goal: {proof_state.goal}</li>
                    {hypothesesComponents}
                </ul>
            </div>

        </>
    );
}

export default TreeItem;