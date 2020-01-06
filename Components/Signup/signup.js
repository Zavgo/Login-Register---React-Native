import React from 'react';

import Firebase from '../../config/FireBase.js';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, updateName, signup  } from '../../actions/user.js';

import { 
   TouchableOpacity,
   StyleSheet,
   TextInput,
   onPress,
   Image,
   Alert,
   Text,
   View
} from 'react-native';

class Signup extends React.Component {
      
   state = {
      name: '',
      email: '',
      password: '',
   }

   handleSignUp = () => {
      this.props.signup()
      this.props.navigation.navigate('Profile')

   }
   
   render() {
      return(
         <View style={styles.container}>
           <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
                 style={styles.goBack}>
                 <Image
                     style={styles.go}
                     source={require('../../img/back.jpeg')}/>
           </TouchableOpacity>
           <View style={styles.createText}>
               <Text style={styles.createText}>Создайте аккаунт</Text>      
            </View>
            <View style={styles.viewLogin}>
               <View style={styles.viewInput}>
               <TextInput 
                  value={this.props.user.name}
                  onChangeText={name => this.props.updateName(name)}
                  placeholder='Name'
                  style={styles.inputEmail}>
               </TextInput>

               <TextInput 
                  placeholder='Email' 
                  onChangeText={email => this.props.updateEmail(email)}
                  value={this.props.user.email}
                  style={styles.inputEmail} >
               </TextInput>

               <TextInput
                   value={this.props.user.password}
                   onChangeText={password => this.props.updatePassword(password)}
                   placeholder='Password'
                   secureTextEntry={true}
                  style={styles.inputPassword}>
               </TextInput>
               </View>
               <TouchableOpacity 
                  onPress={this.handleSignUp}
                  style={styles.viewConnecter}>
                  <Text style={styles.viewSe}> Создать </Text>
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
   createText: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold'
   },
   viewLogin: {
      width: '85%',
      height: '60%',
      borderRadius: 26,
      alignItems: 'center',
      backgroundColor: '#021425'
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

   viewInput: {
      width: '100%' ,
      height: '100%',
      marginTop: '-30%',
      alignItems: 'center',
      justifyContent: 'center',
   },
   viewSe: {
      color: '#08A3B0',
      fontSize: 17,
      fontWeight: 'bold',
   },
   inputEmail: {
     height: 40,
     width: '90%',
     borderWidth: 3,
     marginTop: '6%',
     color: '#fff',
     borderColor: '#021425',
     borderBottomColor: '#032740',
   },
   inputPassword: {
     height: 40,
     width: '90%',
     color: '#fff',
     marginTop: '6%',
     borderWidth: 3,
     borderColor: '#021425',
     borderBottomColor: '#032740',
   },
   viewSe: {
      color: '#fff',
      fontSize: 17,
      marginRight: 5,
      fontWeight: 'bold'
   },
    goBack: {
      width: 45,  
      height: 45,
      marginLeft: 12,
      borderRadius: 32,
      alignItems: 'center',
      alignSelf: 'flex-start',
      justifyContent: 'center',
   },
   go: {
      borderRadius: 30,
      width: 40,
      height: 40,
   },
})


const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, updateName,  signup }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
   
    mapStateToProps,
    mapDispatchToProps

)(Signup)



