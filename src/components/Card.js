import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';


function Card() {
    let { card } = useParams();
    
    return (
        <div 
        className="ui raised very padded text container segment" 
        style={{marginTop:'80px'}}
    >

        <h3 className="ui header"> { card.title } </h3>
        <p>{ card.body }</p>
        
    </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    let  title  = ownProps.user;
    return {
        card: state.cards.find(card => card.title === title)
    }
    console.log(title)
  }

export default connect(mapStateToProps)(Card);
