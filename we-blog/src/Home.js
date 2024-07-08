const Home = () => {

    const handleClick = () =>{
         console.log('hello ninjas', e);
    }


     const handleClickAgain = (name, e) => {
        alert(`Hello ${name}`)
    }

    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click me</button>
           <button onClick={(e) => {
                handleClickAgain('My friend', e);
            }}>Click me again</button>
        </div> 
     );
}
 
export default Home;