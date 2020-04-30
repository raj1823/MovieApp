import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {connect} from 'react-redux';



import ActivityWaiter from '../../activityWaiter';


class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:""
    };
   
    
  }
 
  componentDidUpdate() {
   
  }
  componentDidMount(){

  }

  
  render() {
      return(<View style={{flex:1,backgroundColor:"yellow",justifyContent:"center"}}>
            <Text style={{fontSize:40,alignSelf:"center"}}> Raj Kumar Gupta</Text>
      </View>)
  }
}
const style=StyleSheet.create({


})

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = {

 
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home2);
