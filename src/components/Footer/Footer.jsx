import { Link } from "react-router-dom";
import IgIcon from "./IgIcon";
import WappIcon from "./WappIcon";

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/iconos"><IgIcon  colorIg="#FFFFFF"/></Link>
            <Link to="/iconos"><WappIcon  colorWapp="#FFFFFF"/></Link>
        </div>
    )
}

export default Footer;