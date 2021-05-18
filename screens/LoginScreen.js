import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
} from "react-native";
import { loginS } from "../LoginVerify";
export default class LoginScreen extends React.Component {
  state = {
    username: "",
    password: "",
  };

  _login = async () => {
    try {
      const success = await loginS(this.state.username, this.state.password); //works then it returns true, otherwise an error is thrown
      this.props.navigation.navigate("Main");
    } catch (err) {
      const errMessage = err.message;  //documentation, eeror has a key called .message
      this.setState({ err: errMessage });
    }
  };

  handleUsernameUpdate = (username) => {
    this.setState({ username });
  };

  handlePasswordUpdate = (password) => {
    this.setState({ password });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f46141" />
        <Text style={styles.text}>You are currently logged out.</Text>

        <Text style={styles.errText}> {this.state.err} </Text>

        <TextInput
          placeholder="username"
          value={this.state.username}
          onChangeText={this.handleUsernameUpdate}
          autoCapitalize="none"
          style={styles.inputContainer}
          placeholderTextColor="#000"
        />

        <TextInput
          placeholder="password"
          value={this.state.password}
          onChangeText={this.handlePasswordUpdate}
          autoCapitalize="none"
          style={styles.inputContainer}
          secureTextEntry
          placeholderTextColor="#000"
        />

        <Button title="Press to Log In" onPress={this._login} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#abd",
  },
  text: {
    textAlign: "center",
  },
  inputContainer: {
    padding: 4,
    borderWidth: 2,
    borderColor: "black",
    margin: 5,
  },
  errText: {
    color: "red",
  },
});
