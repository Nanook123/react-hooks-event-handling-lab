


function Keypad(){
function handleSubmit(e){
    e.preventDefault();
    console.log("Entering password...");
}
    return(
        




        
    <form name="password" onChange={handleSubmit}>
        <input type="password" name="password" placeholder="enter password..."/>
        <button>Enter Password</button>


    </form>
    
    
    )
}

export default Keypad