import React, {useState} from "react";
import '../styles/toggle.scss';

const Toggle = (props) => {

    const [toggleState, setToggleState] = useState(false);

    const handleToggle = () => {
        setToggleState(prev => !prev)
        props.onToggle(true)
    }

    return (
        <div className={`toggle ${toggleState ? 'right' : 'left'}`} onClick={handleToggle}>
            <input className="thumb"></input>
        </div>
    )

}

export default Toggle;