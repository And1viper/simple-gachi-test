const MasterList = ({ masterList, masterListLength} ) => {
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
        <>
            <div className="master-list">
                <p style={{ fontSize: '16px', color: 'purple'}}>{resultList}</p>
            </div>
        </>
    )
}

export default MasterList
