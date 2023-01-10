import React, { useEffect, useState } from "react";

function Joke() {

    const [joke, setJoke] = useState('')    // useState({}, [])

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/jokes/random')
        //fetch('http://localhost:3005/jokes/random')
        .then(response => response.json())
        .then(json => { 
            //console.log('joke_json: ', json)
            setJoke(json) 
            //console.log('joke_json', joke) 
            //console.log(json.setup)
            //console.log(json.punchline)
        });
    }, []);  
    
const { setup, punchline } = joke;

return (
    <div>
        <h3>Joke</h3>

        <p>{setup}</p>
        <p><em>{punchline}</em></p>
        

    </div>
)
}

export default Joke;
