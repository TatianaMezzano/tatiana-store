
const CategoryItem = ({name}) => {
    return (
        <a className='nav-link active fw-bolder' aria-current="page" href="#">
            {name}
        </a>        
    )
}

export default CategoryItem