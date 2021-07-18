import ShowButton from "./ShowButton"
import { useState } from "react"

const MasterList = ({ masterList, masterListLength} ) => {
    const [showMasterList, setShowMasterList] = useState(false);

    //For whatever reason masterList.length  gives me undefined
    //console.log(masterList)
    //console.log(masterList.length);

    const theMasters = (list, listLength) => {
        let result = list[0];
        for(let i = 1; i < listLength; i++)
        {
            result += ', ' + list[i];
        }
        return result;
    }

    let resultList = theMasters(masterList, masterListLength);

    return (
        <div>
            <ShowButton text={showMasterList ? 'Close the Master List' : 'Show the Master List'} onShow={() => setShowMasterList(!showMasterList)}/>
            { showMasterList && (<div className="master-list">
                <p style={{ fontSize: '16px', color: 'purple'}}>{resultList}</p>
                <p style={{ fontSize: '14px', color: 'green'}}>Want to be a Master too? Contac me to prove that you are worthy!</p>
            </div>)}
        </div>
    )
}

export default MasterList
