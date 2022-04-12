import React from 'react';
import { useParams } from 'react-router-dom';



export default function Card() {
    let { user } = useParams();
        
    return (
        <div 
        className="ui raised very padded text container segment" 
        style={{marginTop:'80px'}}
    >

        <h1 className="ui "> { user } </h1>
        <h3 className="ui header"> Learn more about { user } </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam atque ducimus commodi distinctio praesentium enim quos quia maxime, nostrum vel culpa eos alias earum error debitis assumenda! Suscipit, {user} exercitationem voluptatibus? Neque est quibusdam incidunt mollitia maiores voluptatem provident, deserunt, deleniti repellat perferendis delectus?</p>
    </div>
    )
}


