import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { Button, UncontrolledCollapse, CardBody, Card  } from 'reactstrap';

import {getComments} from '../actions/commentsActions'

class ShowComments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            comment: this.props.com,
            i: props.index,
            toUpdate: false,
            isEliminated: false
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleUpdate = () => {
        this.setState({toUpdate: true})
     }

    submitUpdate = async (e) => {
        e.preventDefault();
        const body = {
            userId: this.props.user._id, 
            coment: this.state.value,
            i: this.state.i,
            comentId: this.props.comentId
        }

        await axios.put(`http://localhost:8080/api/edit/${this.props.id}`, body)
            .then(res => {
                return res
            })
            .then(data => {
                this.setState({comment: data.data.coments[this.state.i]})
            }
            )
            .catch(e => {
                console.log(e)
            })
        this.setState({toUpdate: false})  
              
    }

    handleDelete = () => {
       
        axios.delete(`http://localhost:8080/api/delete/${this.props.id}/${this.props.comentId}`)

        this.setState({isEliminated: true})
    }

    render(){
        return (
        <div>
           
            {this.state.isEliminated ? 
                <div >
                    <p>Deleted</p>
                </div>
                :
                this.state.toUpdate ? 
                <div>
                        <form onSubmit={this.submitUpdate} className="editForm">
                            <input 
                                type="text" 
                                value={this.state.value} 
                                placeholder={this.state.comment.comentario}
                                onChange={this.handleChange} 
                                className="editInput">
                            </input>
                            <input type="submit" value="Update"></input>
                        </form>
                    </div>

                    :
                    <Card key={this.props.key}>
                        <CardBody>
                            {this.state.comment.comentario}
                             {this.props.user._id === this.props.com.userId ?
                  
                                <div>
                            <Button outline color="warning" onClick={this.handleUpdate}>Editar</Button>
                        <Button outline color="danger" onClick={this.handleDelete} >Eliminar</Button>
                            </div>
                                :

                                <div>

                                </div>
    }
                        </CardBody>
                        
                         
                    </Card>
    }
        </div>
    )     
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
})

export default connect(mapStateToProps) (ShowComments);