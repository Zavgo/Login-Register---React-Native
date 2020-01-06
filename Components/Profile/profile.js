import React from 'react'
import {
   View,
   Text, 
   Image,
   Button,
   onPress,
   StyleSheet,
   TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../../config/FireBase.js'

class Profile extends React.Component {

    handleSignout = () => {
        Firebase.auth().signOut()
        this.props.navigation.navigate('Login')
    }

    render() {

      const {container, content, emailText, textLogout, logout, tabBar, buttCalendar} = styles;

      return (
         <View style={container}>
            <View style={content}>
               <Text style={emailText}>{this.props.user.typeUser}</Text>
               <Text style={emailText}>{this.props.user.name}</Text>

               <TouchableOpacity 
                  onPress={this.handleSignout}
                  style={logout}>
                  <Text style={textLogout}>LOGOUT</Text>
                </TouchableOpacity>

               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#021425'
   },
   content: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
   },
   emailText: {
      fontSize: 22,
      color: '#fff',
   },
   logout: {
      width: 250,
      height: 50,
      alignItems: 'center',
      borderRadius: 22,
      justifyContent: 'center',
      backgroundColor: '#fff',
   },
   textLogout: {
      fontSize: 18,
      color: '#000000',
      fontWeight: 'bold'
   },
   tabBar: {
      height: '100%',
      width: '100%',
      alignItems: 'flex-end',
      position: 'absolute',
      justifyContent: 'center',
      flexDirection: 'row',
   },
   buttCalendar: {
      padding: '6%'
   }
});

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)
