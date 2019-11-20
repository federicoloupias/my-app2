import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import { getFilter } from '../actions/itemActions';
import PropTypes from 'prop-types';

import {Link} from "react-router-dom";
import { Container } from '@material-ui/core';



class CitiesList extends Component{
  
    constructor() {
        super()
        this.state = {
          filteredCities: [],
          cityFilter: "", 
        }
      }

    async componentDidMount() {
        
       await this.props.getItems();
       await this.setState({
        filteredCities: this.props.item.items
      })
       
       
    }


    handleChange = (e) => {
        this.setState({
            cityFilter: e.target.value
        })
        this.filterCities(this.state.cityFilter)
      }

      filterCities (e) {
        let filteredCities = this.props.item.items
        filteredCities = filteredCities.filter((city) => {
          let cityName = city.name.toLowerCase()
          return cityName.indexOf(
            e.target.value.toLowerCase()) !== -1
        })
        this.setState({
          filteredCities
        })
       this.props.getFilter(filteredCities)
      }

       
        
     


    render(){
      
        return(
          
            <div>
              <Container>
            <div>
                <label htmlFor="filter">Filter by Cities: </label>
                <input type="text" id="filter" 
                
                onChange={this.filterCities.bind(this)}/>
            </div>


            {this.state.filteredCities?
            
        <ListGroup>
            {this.state.filteredCities.map((items) => (
            <ListGroupItem style={{backgroundImage: `url(${items.url})`, backgroundPosition:'center', backgroundSize:'cover', width:'300px',
            height:'80px',}} key={items._id}>
            <Link to={"/Cities/".concat(items._id)} style={{color:'white', fontSize:'20px'}}> {items.name}</Link> 
            
            </ListGroupItem>
            ))}
        </ListGroup>:null
        }
</Container>

        </div>
    
        );
    }
}

CitiesList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    item: state.item

})

export default connect(mapStateToProps, { getItems, getFilter })(CitiesList);