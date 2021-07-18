const ShowButton = ( { text, onShow } ) => {
    return (
        <div>
            <button onClick={onShow} className="master-list-btn">{text}</button>
        </div>
    )
}

export default ShowButton
