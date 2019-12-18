import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, UncontrolledCollapse, CardBody, Card  } from 'reactstrap';
import { addComent,borrarComent } from '../actions/userActions';
import {getComments} from '../actions/commentsActions'

import { connect } from 'react-redux';
import ShowComments from './ShowComments';


class Coment extends Component{
  constructor(props) {
    super(props)
    this.state = {
        coment : '',
        comentarios:[]
      }
}

async componentDidMount(){
  await this.props.getComments(this.props.itineraryId)
  this.setState({comentarios: this.props.comments.comments})
  console.log(this.state.comentarios)
}
    

    onChange = e => {
        this.setState({ coment: e.target.value });
      };


    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.coment)
        this.props.addComent(this.props.itineraryId,this.props.user._id,this.state.coment)
        
      };


      setComents = () => {
        console.log(this.props.itinerarios) 

      }


    render(){


        return(
        <div>
          
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleEmail">Coments</Label>
                <Input type='text'
                  name='value'
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
        <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                    Mostrar Todos los Comentarios
            </Button>
        <UncontrolledCollapse toggler="#toggler">
    {this.state.comentarios.map((coment, i) => (
      
      <ShowComments com={coment} comentId={coment._id} index={i} id={this.props.itineraryId} key={i} />

      ))}

</UncontrolledCollapse>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
 
    return {
      user: state.auth.user,
      itinerarios : state.itinerario.itineraries,
      comments: state.comments
    }
  }



export default connect(
    mapStateToProps,
    { addComent, borrarComent, getComments }
  )(Coment);