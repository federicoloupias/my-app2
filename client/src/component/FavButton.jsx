import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFav, removeFav } from '../actions/userActions';
import { loadUser } from '../actions/authActions';



class FavButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      favoritos:[]
    }
  

  }

    static propTypes = {
        addFav: PropTypes.func.isRequired,
        removeFav: PropTypes.func.isRequired,
        loadUser: PropTypes.func.isRequired
      };

      async componentDidMount(){

        await this.props.loadUser()

        console.log('user: ', this.props.usuario);
        
        
        this.setearFavourites()

      }
   
    setearFavourites() {
      if(this.props.usuario.itinerariesFav!==null){
      this.setState({
        favoritos : this.props.usuario.itinerariesFav
      })
      }
    }
      

    favActions (){

        this.props.loadUser()
       
        this.setearFavourites()

        const email = this.props.user.email;
        const itinerayId = this.props.itineraryId;
    

        if(!this.props.user.itinerariesFav.includes(itinerayId)){
          console.log("se agrego el favorito")
          this.props.addFav(email, itinerayId);

        }else{
          console.log("Se elimino el favorito")
          this.props.removeFav(email,itinerayId)
        }
        
        this.props.loadUser()
       
        this.setearFavourites()

        console.log(this.props.user.itinerariesFav.length)
    };
    
showButtonFav(){
  
  const itinerayId = this.props.itineraryId;

  if(!this.state.favoritos.includes(itinerayId)){
    return <Button outline color="success" size="sm" onClick={this.favActions.bind(this)}>
            Add Favourite
        </Button>
  }else{
    return <Button size="sm" color="success"  onClick={this.favActions.bind(this)}>
            Favourite
        </Button>
  }
}

    render(){

        return(
          this.showButtonFav()
        
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
    { addFav, removeFav, loadUser })(FavButton);