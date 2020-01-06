import React from 'react';

import * as firebase from 'firebase';

import { 
   TouchableOpacity,
   StyleSheet,
   TextInput,
   onPress,
   Alert,
   Image,
   Text,
   View
} from 'react-native';


export class Reset extends React.Component {

   constructor(props) {
      super(props);
      
      this.state= {
         email: '',
         error: '',
      };
   }

   forgotPassword ()  {

    const {email} = this.state;
    firebase.auth().sendPasswordResetEmail(email)
      .then(function (user) {
        alert('Please check your email...')
      })
         .catch(function (e) {
            Alert.alert('This account does not exist...')
      })
  }

   render() {

      const { container, viewLogin, goBack, go, forgotText, inputEmail, viewButton, sendButton, buttonText, } = styles;

      return(
        <View style={container}>
           <View style={viewLogin}>
              <TouchableOpacity
                 style={goBack}
                 onPress={() => this.props.navigation.navigate('Login')}>
                 <Image
                     style={styles.go}
                     source={require('../../img/back.jpeg')}/>
              </TouchableOpacity>
              <View style={forgotText}>
                 <Text style={forgotText}>Забыл Пароль ?</Text>
               </View>
               <TextInput 
                  placeholder='Email Address' 
                  style={inputEmail}
                  onChangeText={email => this.setState({ email })}>
               </TextInput>
               <View styles={viewButton}>
                  <TouchableOpacity style={sendButton}
                      onPress={this.forgotPassword.bind(this)}>
                     <Text style={buttonText}> Отправить на емейл </Text>
                  </TouchableOpacity>
               </View>
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
      height: '35%',
      borderRadius: 26,
      alignItems: 'center',
      justifyContent: 'center'
   },
   goBack: {
      width: 45,
      height: 45,
      borderRadius: 22,
      marginLeft: 12,
      alignItems: 'center',
      alignSelf: 'flex-start',
      justifyContent: 'center',
      backgroundColor: '#fff',
   },
   go: {
      width: 45,
      height: 45,
      borderRadius: 40
   },
   forgotText: {
      color: '#fff',
      fontSize: 17,
      marginBottom: 6,
      fontWeight: 'bold',
   },
   inputEmail: {
     height: 40,
     width: '90%',
     color: '#fff',
     borderWidth: 3,
     marginTop: '6%',
     borderColor: '#021425',
     borderBottomColor: '#032740',

   },
   sendButton: {
    width: 290,
    height: 50,
    marginTop: 32,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#094C54'

   },
   buttonText: {
      fontSize: 17,
      color: '#fff',
      fontWeight: 'bold',
   },
   viewSe: {
      color: '#08A3B0',
      fontSize: 20,
      fontWeight: 'bold',
   },

})





