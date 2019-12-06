import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFav } from '../actions/userActions';


class FavButton extends Component{

    static propTypes = {
        addFav: PropTypes.func.isRequired
      };
   

    agregarFav (){
    
        const email = this.props.user.email;
        const itinerayId = this.props.itineraryId;
    
        
    
        // Attempt to add Favourite
        this.props.addFav(email, itinerayId);
      };
    


    render(){

      //console.log(this.props.itineraryId)

        return(

        <Button olor="primary" size="sm" onClick={this.agregarFav.bind(this)}>
            Favourite
        </Button>
        );
    }
}

// ItineraryList.propTypes = {
//     getItineraries: PropTypes.func.isRequired,
//     itineraries: PropTypes.object.isRequired
// }


const mapStateToProps = (state) => {
 
  return {
    user: state.auth.user
  }
}



export default connect(
    mapStateToProps,
    { addFav })(FavButton);