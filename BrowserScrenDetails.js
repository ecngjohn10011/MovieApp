import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  ImageBackground,
  Image,
  Linking,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { MovieContext } from "./AppContext";
import { fetchUsers3 } from "./Api";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingBottom: 2,
  },
  inputContainer: {
    padding: 10,
    paddingHorizontal: 40,
    flexDirection: "row",
    borderWidth: 3,
    borderColor: "black",
    margin: 5,
    borderRadius: 29,
    marginTop: -70,
  },
  textIn: {
    paddingHorizontal: 14,
    flexDirection: "row",
    color : '#000',
    fontSize: 25,
    fontStyle: "italic",
  },
  tinyLogo: {
    width: 270,
    height: 250,
    borderRadius: 10,
    opacity: 0.7,
  },
});

export default class BrowsingDetails extends React.Component {
  state = {
    MovieName: "",
    isTextValid: true,
  };

  handleInput = (MovieName) => {
    this.setState({ MovieName }, this.validateText);
  };

  validateText = () => {
    //validate that a string is entered
    if (this.state.MovieName.length >= 1) {
      return this.setState({ isTextValid: false });
    } else {
      return this.setState({ isTextValid: true });
    }
  };

  ProcessURL = async () => {
    const result = await fetchUsers3(this.state.MovieName);
    //console.log(result);
    return result; //returns plot of movie, could return an array and use whatever else the object API response provides
  };

  onSearch = async () => {
    const result = await this.ProcessURL(this.state.MovieName);
    this.props.onPressSearch(this.state.MovieName, result);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <StatusBar backgroundColor="#0044ff" />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Browse Here : "
            // placeholderTextColor="#E6E6FA"
            placeholderTextColor="grey"
            style={styles.textIn}
            value={this.state.MovieName}
            onChangeText={this.handleInput}
          />
          <TouchableOpacity
            disabled={this.state.isTextValid}
            onPress={() => {
              this.onSearch();
            }}
          >
            <Octicons name="search" size={38} color= "grey" />
          </TouchableOpacity>
        </View>
        
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      

        <TouchableOpacity
          title="Click me"
          onPress={() => {
            Linking.openURL("https://reactnative.dev/");
          }}
        >
          <ImageBackground
            style={styles.tinyLogo}
            source={require("./imgs/RN_colorx512.png")}
          />
        </TouchableOpacity>
        <Text style= {{fontSize : 25, fontWeight: 'bold', marginBottom:10}}>REACT NATiVE </Text>

        <Text>All data for movies sourced from the<Text style = {{color: 'blue'}} onPress={() => Linking.openURL('https://www.omdbapi.com/')}> OMDb API </Text> </Text>


      </KeyboardAvoidingView>
    );
  }
}
