import React from 'react'
import {Text, View} from 'react-native'


export const MovieContext = React.createContext();

export default class MovieContextProvider extends React.Component{

  state = {
    movieName : '',
  }


  render(){
    return(
      <MovieContext.Provider value ={{movieName : this.state.movieName}}>
        {this.props.children}
      </MovieContext.Provider>
    )
  }



}