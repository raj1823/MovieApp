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





class TvShows extends React.Component {
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
      return(<View>

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
)(TvShows);
