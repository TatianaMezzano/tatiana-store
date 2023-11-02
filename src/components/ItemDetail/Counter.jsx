

const Counter = ({count, setCount}) => {
    
    return (
        <div >           
            
            <button className="counter" onClick={() => count > 1 ? setCount((count) => count - 1):null}>
                -
            </button>
            <b className="count">{count}</b>
            <button className="counter" onClick={() => setCount((count) => count + 1)}>
                +
            </button>


        </div>
    )
}

export default Counter 