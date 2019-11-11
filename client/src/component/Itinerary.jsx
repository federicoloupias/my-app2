import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itineraryActions';
import PropTypes from 'prop-types';

class ItineraryList extends Component{
   
    async componentDidMount() {
        
       await this.props.getItems();

    }



    render(){
      const { itineraries } = this.props.itineraries;

        return(

        <ListGroup>
            {itineraries.map(({title}) => (
            <ListGroupItem> {title} </ListGroupItem>
            ))}
        </ListGroup>

        );
    }
}

ItineraryList.propTypes = {
    getItems: PropTypes.func.isRequired,
    itineraries: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  itineraries: state.itineraries

})

export default connect(mapStateToProps, { getItems })(ItineraryList);