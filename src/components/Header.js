import { Link } from "react-router-dom"

const Header = ( {title} ) => {
    return (
        <div>
            <h1>{title}</h1>  
            <div className="navbar">
                <ul className="nav-list">
                    <li><Link to="/">List</Link></li>
                    <li><Link to="test">Test</Link></li>
                </ul>
            </div>  
        </div>
    )
}

export default Header
