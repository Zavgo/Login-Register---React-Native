import React from 'react';

import Firebase from '../../config/FireBase.js'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../../actions/user.js'

import {
   TouchableOpacity,
   StyleSheet,
   TextInput,
   Image,
   onPress,
   Alert,
   View,
   Text 
}from 'react-native'
import Zvezda from '../Zvezda/zvezda'

 class Login extends React.Component {

   state = {
      email: '',
      password: ''
   }

    componentDidMount = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.getUser(user.uid)
                if (this.props.user != null) {
                    this.props.navigation.navigate('Profile')
                }
            }
        })
    }


   render() {
      return(
         <View style={styles.container}>
            <View>
               <Zvezda />
            </View>
            <View style={styles.viewLogin}>
               <View style={styles.viewInput}>
               <TextInput 
                  value={this.props.user.email}
                  onChangeText={email => this.props.updateEmail(email)}
                  placeholder='Email' 
                  style={styles.inputEmail}>
               </TextInput>

               <TextInput
                  value={this.props.user.password}
                  onChangeText={password => this.props.updatePassword(password)}
                  secureTextEntry={true} 
                  placeholder='Password' 
                  style={styles.inputPassword}>
               </TextInput>

               <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate('Reset')}
                  style={styles.forgotTouch}>
                  <Text style={styles.textForgot}>Забыл пароль ?</Text>
               </TouchableOpacity>

               </View>
               <TouchableOpacity 
                  onPress={() => this.props.login()}
                  style={styles.viewConnecter}>
                  <Text style={styles.viewSe}>Войти</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Signup')}
                  style={styles.textCompte}>
                  <Text style={styles.textCompte}>Создать аккаунт</Text>
               </TouchableOpacity>
            </View>
         </View>
     )
   }
} 
const styles = StyleSheet.create({
   container: {
      width:  '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#021425'
   },
   viewLogin: {
      width: '85%',
      height: '55%',
      borderRadius: 26,
      alignItems: 'center',
   },
   viewInput: {
      width: '100%' ,
      height: '100%',
      marginTop: '-25%',
      alignItems: 'center',
      justifyContent: 'center',
   },
   forgotTouch: {
      marginTop: 12,
   },
   viewConnecter: {
      width: '95%',
      height: 50,
      marginTop: -50,
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#094C54'
   },
   viewSe: {
      color: '#fff',
      fontSize: 17,
      marginRight: 5,
      fontWeight: 'bold'
   },
   textForgot: {
      color: '#fff'
   },
   inputEmail: {
     height: 40,
     width: '90%',
     borderWidth: 3,
     color: '#fff',
     borderColor: '#021425',
     borderBottomColor: '#032740',
   },
   inputPassword: {
     height: 40,
     color: '#fff',
     width: '90%',
     borderWidth: 3,
     marginTop: '6%',
     borderColor: '#021425',
     borderBottomColor: '#032740',
   },
   textCompte: {
      color: '#fff',
      marginTop: '3%'
   },
   errorText: {
      marginTop: 10, 
      color: 'red'
   },
})



const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

