import { NavData } from "../../data/NavData"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
    return (
     <ul>
        {NavData.map((item, index)=>(
            <li key={index}><Link to = {item.link}>
            <FontAwesomeIcon icon={item.icon}/> {item.navName}</Link></li>
        ))}
     </ul>
    )
}

export default Navbar