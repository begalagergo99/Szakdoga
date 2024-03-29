/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Login extends React.Component {
  static navigationOptions = {
    header: false,
  }
  constructor(props) {
    super(props);
    this.state = {
      logined: ''
    };


  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.logined != nextProps.logined && nextProps.logined != undefined) {
      this.props.goToPage("Home")
      return true
    }

    return false
  }

  login() {
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    data = JSON.stringify(data);
    console.log("Login data: ", data)
    this.props.login(data)
  }

  changeScreen() {
    this.props.navigation.navigate('Registration')
  }

  render() {
    return (
      <LinearGradient colors={['#0398fc', '#3b5998', '#8800ff']} style={styles.linearGradient}>
        <View style={{ backgroundColor: "white", borderRadius: 20, marginHorizontal: "5%", marginTop: "20%", padding: 20 }} >

          <View style={styles.inputBlock} >
            <FontAwesome name="envelope" style={{ color: "gray",fontSize:18 }} />
            <TextInput placeholder="Email" placeholderTextColor="gray" style={styles.textInput}
              onChangeText={(text) => this.setState({ email: text })} />
          </View>
          <View style={styles.inputBlock} >
            <FontAwesome name="unlock" style={{ color: "gray",fontSize:18 }} />
            <TextInput placeholder="Password" placeholderTextColor="gray" style={styles.textInput}
              onChangeText={(text) => this.setState({ password: text })} />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={() => this.login()} >
            <View >
              <Text style={{textAlign:"center",fontSize:20}} >Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.registerBtn } onPress={() => this.changeScreen()} >
            <View>
              <Text style={{textAlign:"center",fontSize:20}} >Registration</Text>
            </View>
          </TouchableOpacity>

        </View>
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  textInput: {
    marginLeft: "10%",
    fontSize:18,
    color:"black"
  },
  inputBlock: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginHorizontal: "20%",
    marginTop:"10%"
  },
  linearGradient: {
    height: "100%"
  },
  loginBtn:{
    backgroundColor:"#0398fc",
    marginHorizontal:"25%",
    marginTop:"15%",
    padding:10,
    borderRadius:20
  },
  registerBtn:{
    backgroundColor:"#3b5998",
    marginHorizontal:"25%",
    marginTop:"15%",
    padding:10,
    borderRadius:20
  }
});

export default Login;
