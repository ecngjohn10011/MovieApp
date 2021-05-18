import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useRoute } from "@react-navigation/native";
import ImageZoom from "react-native-image-pan-zoom";
import ImageViewer from "react-native-image-zoom-viewer";

const SearchStack = createStackNavigator();

const styles = StyleSheet.create({
  SText: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  SText2: {  
    flex: 1,
    paddingTop: 15,
    paddingLeft: 10,
  },  
});

function A() {
  return (
    <View>
      <Text></Text>
    </View>
  );
}

function Search() {
  const route = useRoute();
  const { mName } = route.params;
  return (
    <View style={styles.SText}>
      <Text style={[{ color: "red" , fontSize: 20, paddingTop: 20 }]}>
        You Searched for : {mName}
      </Text>
      <A />
    </View>
  );
}

export default class SearchStacks extends React.Component {
  state = {
    movieplot: "",
    movietitle: "",
    moviePoster: "",
    movieYear: "",
    movieRated: "",
    movieRuntime : "",
    movieGenre: "",
    movieDirector: "",
    movieActors: "",
    movieRating: "",
    movieProduction: ""
  };

  componentDidMount() {
    this.getResults();
  }

  getResults = () => {
    const { urlfx } = this.props.route.params;
    const results = urlfx;
    if (results === "Movie not found!") {
      this.setState({ movieplot: results, movietitle: "Doesen't Exist" });
    } else {
      console.log(results);
      
      const movieProductions = results.pop();
      const movieRating = results.pop();
      const movieactors = results.pop();
      const movieDirectors = results.pop();
      const movieGenres = results.pop();
      const movieTime = results.pop();
      const movieRate = results.pop();
      const movieYr = results.pop();
      const moviePost = results.pop();
      const title = results.pop();
      console.log(JSON.stringify(moviePost));

      this.setState({
        movieplot: results,
        movieRated: movieRate,
        movieYear: movieYr,
        moviePoster: moviePost,
        movietitle: title,
        movieRuntime: movieTime,
        movieGenre: movieGenres,
        movieDirector : movieDirectors,
        movieActors: movieactors,
        movieRating: movieRating,
        movieProduction: movieProductions,
      });
    }
  };

  renderPoster = () => {
    return (
      <ImageZoom
        cropWidth={Dimensions.get("window").width}
        cropHeight={350}
        imageWidth={295}
        imageHeight={350}
      >
        <Image
          source={{ uri: this.state.moviePoster + " " }}
          style={{ width: 255, height: 360, marginHorizontal: 20 }}
        />
      </ImageZoom>
    );
  };

  render() {
    const moviePoster = JSON.stringify(this.state.moviePoster);

    return (
      <ScrollView style={{ alignContent: "center" }}>
        <Search />
        <View style={{ padding: 1 }}></View>
        <Text style={{ padding: 10, color: "blue" }}>
          Name of the Movie : {this.state.movietitle}{" "}
        </Text>
        <Text style={{ padding: 10, color: "red" }}>
          Info about the Movie : {this.state.movieplot}{" "}
        </Text>
        <View style={{ padding: 10 }}></View>

        <this.renderPoster />

        <View style = {{paddingTop: 15}}>

        <Text style= {{paddingLeft:10}}>Movie Year: {this.state.movieYear}</Text>
        <Text style= {{paddingLeft:10}}>Movie Rated: {this.state.movieRated}</Text>
        <Text style= {{paddingLeft:10}}>Movie Runtime: {this.state.movieRuntime}</Text>
        <Text style= {{paddingLeft:10}}>Movie Genre: {this.state.movieGenre}</Text>
        <Text style= {{paddingLeft:10}}>Movie Director(s): {this.state.movieDirector}</Text>
        <Text style= {{paddingLeft:10}}>Movie Actors: {this.state.movieActors}</Text>
        <Text style= {{paddingLeft:10}}>IMDb Rating: {this.state.movieRating}</Text>
        <Text style= {{paddingLeft:10}}>Movie Production: {this.state.movieProduction}</Text>
        
                {/* <Text>All data for movies sourced from the<Text style = {{marginTop:10, color: 'blue'}} onPress={() => Linking.openURL('https://www.omdbapi.com/')}> OMDb API </Text> </Text> */}
        <View style = {{    flex: 1,
              alignContent: "center",
              padding: 20,
              alignItems: "center",}}
        >
            <Text>All data for movies sourced from the
              <Text style = {{margin:10, color: 'blue'}} onPress={() => Linking.openURL('https://www.omdbapi.com/')}> OMDb API </Text>
              </Text>
        </View>

        </View>

      </ScrollView>
    );
  }
}

//  <Image
//    source={{ uri: this.state.moviePoster + " " }}
//    style={{ width: 205, height: 350, marginHorizontal: 10 }}
//  />;

//  <this.renderPoster />
//`${this.state.moviePoster}`
//"https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
