import ShowButton from "./ShowButton"
import { useState } from "react"
import { Link } from "react-router-dom";

const MasterList = () => {
    const [showMasterList, setShowMasterList] = useState(false);
    return (
        <div>
            <ShowButton text={showMasterList ? 'Close the Master List' : 'Show the Master List'} onShow={() => setShowMasterList(!showMasterList)}/>
            { showMasterList && (<div className="master-list">
                <p style={{ fontSize: '16px', color: 'purple'}}>This list is unaccesible for slaves! Write your name and show who you are!</p>
                <p style={{ fontSize: '14px', color: 'green'}}>Want to be a Master too? Pass the <Link to="/test">Test</Link> to prove that you are worthy!</p>
            </div>)}
        </div>
    )
}

export default MasterList
