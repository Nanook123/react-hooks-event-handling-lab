function EyesOnMe() {




    return (
        <button onBlur={() =>
            console.log("Hey! Eyes on me!")} onFocus={() =>
                console.log("Good!")} name="EyesOnMe">Eyes on me</button>

    )
}


export default EyesOnMe