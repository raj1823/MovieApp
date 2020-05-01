import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
const Realm = require('realm');


import {isUserAuthenticated} from '../../Services/Authentication/action'
import ActivityWaiter from '../../activityWaiter';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      realm: null,
      usernameImage:require('../../assets/username.png'),
      passwordImage:require('../../assets/password.png'),
      logoPath:require('../../assets/logo.png'),

    };
   
    
  }
 
  componentDidUpdate() {
   
  }
  saveData() {
    const {realm} = this.state;
    realm.write(() => {
      realm.create('UserData', {username: 'Admin', password: 'Admin'});
    });
  }

  deleteData() {
    const {realm} = this.state;
    realm.write(() => {
      let user = realm.objects('UserData');
      realm.delete(user);
    });
  }

  componentDidMount(){
    Realm.open({
      schema: [
        {
          name: 'credentialsData',
          properties: {username: 'string', password: 'string'},
        },
      ],
    }).then(realm => {
      this.setState({realm});
      this.deleteData();
      this.saveData();
    });

  }
  componentWillUnmount() {
    const {realm} = this.state;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }

  
  render() {
    const {isLoading,realm} = this.state;
    console.log('Global States', this.props);

    return isLoading ? (
      <ActivityWaiter />
    ) : (
      <View style={style.container}>
        
          <View style={style.parentView}>
          
            <View style={style.midSection}>

              <View style={{flex:2,justifyContent:"flex-end",alignItems:"center"}}>
                <Image source={this.state.logoPath} 
                        style={{height:140,width:100,marginBottom:22}}></Image>

              </View>

              <View style={{ marginVertical:20,flex:1}}>

              <View style={style.SignUpLogin}>


                <View style={{...style.container,alignItems:"flex-end",}}>
                    <Text style={style.loginText}> Login</Text>
                </View>


                <View style={{...style.container}}>
                  <Text style={style.signUpText}> Sign Up</Text>
                  </View>


              </View>
              <Text style={style.loginInfo}>Please login to access your account</Text>

               
              </View>



              
            </View>



            <View style={style.bottomSection}>
            <View style={style.divider}>
            <Image source={this.state.usernameImage} style={style.image}/>
                <TextInput
                  style={style.inputDetails}
                  placeholder={'User Name'}
                  placeholderTextColor="#919294"
                  autoCapitalize={false}
                  blurOnSubmit={true}
                  defaultValue={this.state.username}
                  onChangeText={text => {
                    this.setState({username: text});
                  }}
                />
              </View>
              <View style={{...style.divider}}>
                <Image source={this.state.passwordImage} style={style.image}/>
                <TextInput
                  style={style.inputDetails}
                  placeholder={'Password'}
                  placeholderTextColor="#919294"
                  
                  secureTextEntry={true}
                  autoCapitalize={false}
                  onChangeText={text => {
                    this.setState({password: text});
                  }}
                />
              </View>


              <TouchableOpacity onPress={()=>{
                // this.props.navigation.navigate("MyDrawer")
                this.props.authenticateUser(
                  realm.objects('UserData'),
                  username,
                  password,
                );
              }}>
                <View style={style.loginButton}>
                  <Text style={style.loginText2}>Login</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={style.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>

             
            </View>
          </View>
       
      </View>
    );
  }
}
const style = StyleSheet.create({
  image: {
    
    resizeMode: 'contain',
    alignSelf:"center",
    height:28,
    width:28,
    flex:1,
    margin:6
  },
  loginInfo:{
    fontSize:20,
    color:"#919294",
    alignSelf:"center",
    marginVertical:15

  },
  container: {
    flex: 1,
    
    
  },
  SignUpLogin: {
   flexDirection:"row",
  

  },
  loginText2:{
    color:"white",
    alignSelf:"center",
    fontSize:26,
    paddingVertical:12
  },
  forgotPassword: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#919294',
    marginTop: 12,
    marginBottom: 20,
    fontWeight: '600',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
  },
  divider: { flexDirection:"row"},

  inputDetails: {
    backgroundColor:"#181f29",
    paddingVertical: 18,
    paddingLeft:10,
    fontSize: 20,
    flex:7,
    
    marginRight: 15,
  
    fontWeight: '400',
    marginVertical:20,
    color:"#919294"
    
    
  },
  signUpText: {
  
    color: '#fff',
    fontSize: 26,
    paddingVertical: 11,
    marginLeft:22,
  },
  midSection: {
    flex: 0.9, backgroundColor:"#181f29"
  },
  newUserSignUp: {
    marginVertical: 10,

    flexDirection: 'row',
    marginVertical: 17,
    marginHorizontal: 15,
  },
  parentView: {
   
    flex: 1,
   
  },
  bottomSection: {
    flex: 1,
    backgroundColor:"#181f29"
  },
  loginText: {
    


    marginRight:22,
    color: '#e4264e',
    fontWeight:"800",
    fontSize: 30,
    
    paddingVertical: 11,
    

  },

  loginButton: {
    borderRadius: 7,
    backgroundColor: '#e4264e',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:15,
    marginHorizontal:15

  },
  
});

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = {
  authenticateUser: isUserAuthenticated,

 
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
