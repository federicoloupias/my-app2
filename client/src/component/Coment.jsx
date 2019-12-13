import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button  } from 'reactstrap';
import { addComent } from '../actions/userActions';

import { connect } from 'react-redux';


class Coment extends Component{
    state = {
        coment : ''
      };


    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };


    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.coment)
        this.props.addComent(this.props.itineraryId,this.props.user._id,this.state.coment)
        
      };


    render(){

      

        return(
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleEmail">Coments</Label>
                <Input type='text'
                  name='coment'
                  id='coment'
                  placeholder='Add Coment for this itinerary !'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Submit
                </Button>
            </FormGroup>
        </Form>

        );
    }
}

const mapStateToProps = (state) => {
 
    return {
      user: state.auth.user
    }
  }



export default connect(
    mapStateToProps,
    { addComent }
  )(Coment);