import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getItineraries } from '../actions/itineraryActions';

class ItineraryList extends Component{
   
    async componentDidMount() {
      let cityId = this.props.match.params.cityId
       await this.props.getItineraries(cityId)
    }

    render(){
      // const { itineraries } = this.props.itineraries;

        return(

        <ListGroup>
            {this.props.itineraries.map(({title}) => (
            <ListGroupItem> {title} </ListGroupItem>
            ))}
        </ListGroup>

        );
    }
}

// ItineraryList.propTypes = {
//     getItineraries: PropTypes.func.isRequired,
//     itineraries: PropTypes.object.isRequired
// }


const mapStateToProps = (state) => {
  console.log(state)
  return {
    itineraries: state.itinerario.itineraries
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    getItineraries: (cityId)=>dispatch(getItineraries(cityId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryList);