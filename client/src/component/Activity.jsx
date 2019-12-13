import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, CardTitle  } from 'reactstrap';
import { connect } from 'react-redux';
import { getActivities } from '../actions/activityActions';

class Activity extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activities:[]
    };
  }

   async componentDidMount() {
   
    await this.props.getActivities(this.props.itineraryId);
    this.setState({
      activities: this.props.activities
    })
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render(){
    return(
      <div>
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Show activities</Button>
          <Collapse isOpen={this.state.isOpen}>
        <Card>
          <CardBody>
         {this.state.activities.map((activity) =>{
         return <CardTitle key={activity._id}>{activity.title}</CardTitle>       
  })}
          </CardBody>
        </Card>
      </Collapse> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
    activities: state.activities.activities
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    getActivities: (itineraryId)=>dispatch(getActivities(itineraryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);