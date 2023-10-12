import { Link } from "react-router-dom"
const CategoryItem = ({name}) => {
    return (
        <Link className='nav-link active fw-bolder' aria-current="page" to={`/category/${name}`}>
            {name}
        </Link>        
    )
}

export default CategoryItem