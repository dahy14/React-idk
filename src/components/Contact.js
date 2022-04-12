import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './Modal';
import { connect } from 'react-redux';

const Contact = ({ cards }) => {

    return(
        <div>
             {/* <Modal /> */}
           
            {/* <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
                <Link to="/Miggy"> Miggy </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum delectus consectetur fuga! Quibusdam doloremqu?</p>
            </div>

            <div className="ui raised very padded text container segment" style={{marginTop:'40px'}}>
                <Link to="/Jemma"> Jemma </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum delectus consectetur fuga! Quibusdam doloremqu?</p>
            </div> */}
            {
                cards.map(card => {return(
                    <div 
                    className="ui raised very padded text container segment" 
                    style={{marginTop:'40px'}}
                    key = {card.id}
                    >
                        <Link to={`/${card.title}`}> {card.title} </Link>
                        <p>{card.body}</p>
                    </div>
                )})
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps)(Contact);