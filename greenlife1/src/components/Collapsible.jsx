import {useState} from "react";

export default function Collapsible(props) {
    const [open, setOpen] = useState(false);

    function toggle() {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    return (<>
        <button className={open ? "collapsible collapsible-open" : "collapsible collapsible-closed"} onClick={toggle}>{props.stepName}</button>
        <div className={open ? "open" : "closed"}>
            <ul>
                {props.substeps.map((substep, subindex) => 
                    <li key={subindex}>{substep}</li>)}
            </ul>
        </div>
    </>)
}
