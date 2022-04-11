import React from 'react';

class Card extends React.Component {
    state = {user: ''}
    
    // idk why this is here
    // just watch more react router videos
    

    render(){

        const { user } = this.state;

        return (
            <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>

                <h3 className="ui header"> card</h3>
            </div>
        )
    }

}

export default Card;