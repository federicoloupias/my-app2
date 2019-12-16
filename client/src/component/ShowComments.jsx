import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { Button, UncontrolledCollapse, CardBody, Card  } from 'reactstrap';


class ShowComments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            comment: props.com,
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
            user: this.props.user._id, 
            coment: this.state.value,
            i: this.state.i
        }

        await axios.put(`http://localhost:8080/api/edit/${this.props.itineraryId}`, body)
            .then(res => {
                return res
            })
            .then(data => {
                this.setState({comment: data.data[this.state.i]})
            })
            .catch(e => {
                console.log(e)
            })
        this.setState({toUpdate: false})        
    }

    handleDelete = () => {
       
        axios.put(`http://localhost:8080//api/delete/${this.props.itineraryId}/${this.props.comentId}`)

        this.setState({isEliminated: true})
    }

    render(){
        return (
        <div>
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                    Mostrar Todos los Comentarios
            </Button>

            <UncontrolledCollapse toggler="#toggler">
                    <Card key={this.props.key}>
                        <CardBody>
                            {this.state.comment.comentario}
                        </CardBody>
                    </Card>
            </UncontrolledCollapse>
        </div>
            )     
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
})

export default connect(mapStateToProps) (ShowComments);