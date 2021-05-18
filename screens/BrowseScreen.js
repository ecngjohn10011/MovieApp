import React from "react";
import BrowsingDetails from '../BrowserScrenDetails'



export default class BrowseStackScreen extends React.Component{

  onSearch = (Mname,URLplot) => {
    this.props.navigation.navigate("Searches", {mName : Mname, urlfx : URLplot} );
  }


  render(){
    return <BrowsingDetails onPressSearch = {this.onSearch}/>;
  }
}



