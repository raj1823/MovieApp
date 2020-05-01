import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';

import ActivityWaiter from '../../activityWaiter';

import {dataFetch} from '../../Services/Data/fetchData';
import data_Reducer from '../../Services/Data/reducer';

class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     drawerImage:require('../../assets/drawer.png'),
     searchIcon:require('../../assets/search.png'),
     notificationIcon:require('../../assets/notification.png')
    };
  }

  componentDidUpdate() {}
  componentDidMount() {
    console.log('Inside mount');
    this.props.fetchMovieData();
  }

  render() {
    console.log(
      'inside render: ',
      'https://image.tmdb.org/t/p/w500' + this.props.moviesData[0].poster_path,
    );
    return (
      <SafeAreaView style={{backgroundColor:"#181f29",flex:1}}>

        <View style={{flexDirection:"row"}}>
          <View style={{flex:1,backgroundColor:"black",flexDirection:"row"}}>
            <Image source={this.state.drawerImage}
                      style={{height:40,width:40,margin:15}}/>
              < Text style={{alignSelf:"center",fontSize:22,color:"white",fontWeight:"800"}}> APP LOGO</Text>
          </View>


          <View style={{flex:1,backgroundColor:"orange",flexDirection:"row",alignItems:"flex-end"}}>
            <Image source={this.state.searchIcon}
             style={{height:40,
             width:40,
             resizeMode:"contain",
             margin:15}}/>

            <Image source={this.state.notificationIcon} 
            style={{
              height:40,
              width:40,
              resizeMode:"contain",
              margin:15}}/>


            </View>

        </View>
        <View>
        <FlatList
          style={{marginBottom: 10, backgroundColor: '#181f29'}}
          horizontal={true}
          data={this.props.moviesData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
                  }}
                  style={style.imageStart}
                />
              </TouchableOpacity>
            );
          }}
        />
        </View>
       

        <View style={style.innerFirstSection}>
          <Text style={{color:"#919294"}}>MOVIES</Text>

          <TouchableOpacity>
            <Text>Show All</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  imageStart: {
    height: 220,
    width: 350,
    resizeMode: 'stretch',
    marginLeft: 15,
    marginVertical: 20,
    borderRadius: 10,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  innerFirstSection: {
    
    marginTop: 3,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});

const mapStateToProps = state => ({
  moviesData: state.data_Reducer.storedData,
});

const mapDispatchToProps = {
  fetchMovieData: dataFetch,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home2);
