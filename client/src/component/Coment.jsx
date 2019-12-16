import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, UncontrolledCollapse, CardBody, Card  } from 'reactstrap';
import { addComent,borrarComent } from '../actions/userActions';

import { connect } from 'react-redux';


class Coment extends Component{
  constructor(props) {
    super(props)
    this.state = {
        coment : '',
        comentarios:[{_id:'5df6c8d559c4ba2c3408c75d', comentario:'estas'}]
      }
}
    

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };


    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.coment)
        this.props.addComent(this.props.itineraryId,this.props.user._id,this.state.coment)
        
      };

      editarComent  = (itineraryId, comentId)  =>  {
      }
      borrarComent =(itineraryId, comentId)  =>  {
      
        this.props.borrarComent(itineraryId,comentId)
      }


    render(){


        return(
        <div>
          
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

        <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Mostrar Todos los Comentarios
    </Button>
    <UncontrolledCollapse toggler="#toggler">
    {this.state.comentarios.map((coment) => (
      <Card key= {coment._id}>
        <CardBody key= {coment._id}> 
              {coment.comentario}

        <Button outline color="info" onClick={this.editarComent(this.props.itineraryId,coment._id)}>Editar</Button>
        <Button outline color="danger" onClick={this.borrarComent(this.props.itineraryId,coment._id)}>Eliminar</Button>
        </CardBody>
      </Card>
      ))}
    </UncontrolledCollapse>

        </div>
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
    { addComent, borrarComent }
  )(Coment);