

const Counter = ({count, setCount}) => {
    
    return (
        <div >           
            
            <button onClick={() => count > 1 ? setCount((count) => count - 1):null}>
                -
            </button>
            {count}
            <button onClick={() => setCount((count) => count + 1)}>
                +
            </button>


        </div>
    )
}

export default Counter 