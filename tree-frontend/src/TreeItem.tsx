import { useState } from "react";


function TreeItem({ proof_state, next_tactic } : { proof_state: { hypotheses: string[], goal: string }, next_tactic: string }) {
    const [open, setOpen] = useState(false);
    const hypothesesComponents = proof_state.hypotheses.map(h => {
        return <li>Hypothesis: {h}</li>
    });
    return (<>
            <label htmlFor="expanded">{next_tactic}</label>
            <input type="checkbox" name="expanded" checked={open} onClick={() => setOpen(!open)} />
            <h3 hidden={!open}>{proof_state.goal}</h3>
            <ul hidden={!open}>
                {hypothesesComponents}
            </ul>
        </>
    );
}

export default TreeItem;