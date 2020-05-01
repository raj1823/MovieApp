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

import {dataFetch,fetchLiveChannels,fetchCategories} from '../../Services/Data/fetchData';
import data_Reducer from '../../Services/Data/reducer';
import { ScrollView } from 'react-native-gesture-handler';


class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     drawerImage:require('../../assets/drawer.png'),
     searchIcon:require('../../assets/search.png'),
     notificationIcon:require('../../assets/notification.png'),
     ratings:require('../../assets/ratings.png')
    };
  }

  componentDidUpdate() {}
  componentDidMount() {
    console.log('Inside mount');
    this.props.fetchMovieData();
    this.props.fetchLiveData();
    this.props.fetchCategories();
  }

  render() {
    // console.log(
    //   'inside render: ',
    //   'https://image.tmdb.org/t/p/w500' + this.props.moviesData[0].poster_path,
    // );
    console.log("live Data:",this.props.liveData)
    console.log("Category Data:",this.props.categoryData)
    return (
      <SafeAreaView style={{backgroundColor:"#181f29",flex:1}}>
       

        <View style={{flexDirection:"row",}}>
          <View style={{flex:1,backgroundColor:"black",flexDirection:"row"}}>

            <TouchableOpacity onPress={()=>{
              this.props.navigation.openDrawer()
            }}>

            <Image source={this.state.drawerImage}
                      style={{height:40,width:40,margin:15}}/>
            </TouchableOpacity>
           
              < Text style={{alignSelf:"center",fontSize:22,color:"white",fontWeight:"800"}}> APP LOGO</Text>
          </View>


          <View style={{flex:1,backgroundColor:"black",flexDirection:"row",justifyContent:"flex-end"}}>

          <Image source={this.state.notificationIcon} 
            style={{
              height:30,
              width:30,
              resizeMode:"contain",alignSelf:"center",
              margin:13}}/>
            <Image source={this.state.searchIcon}
             style={{height:30,
             width:30,alignSelf:"center",
             resizeMode:"contain",
             margin:13}}/>

           


            </View>

        </View>
         <ScrollView>
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
          <Text style={{color:"#919294",fontSize:16}}>MOVIES</Text>

          <TouchableOpacity>
            <Text style={{color:"#e4264e",fontSize:16,fontWeight:"600"}}>Show All</Text>
          </TouchableOpacity>
        </View>

          <View>
        <FlatList
          style={{marginBottom: 10, backgroundColor: '#181f29'}}
          horizontal={true}

          data={this.props.moviesData}
          renderItem={({item}) => {
            return (
              <View style={{marginHorizontal:10,width:140}}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
                  }}
                  style={style.imageStart2}
                />
              </TouchableOpacity>

              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{flex:0.8}}>

              <Text style={{
                color:"#919294",
                fontSize:16,
                fontWeight:"600",
                 marginVertical:10,
                 alignSelf:"center"
                 }}>{item.original_title}</Text>
              </View>
              <View style={{flex:0.2,marginHorizontal:5,marginVertical:8}}>
              <Image source={this.state.ratings} 
                      style={{
                        height:20,
                        alignSelf:"center",
                        width:20,
                     
                        resizeMode:"contain"}} />
               <Text style={{
                color:"#919294",
                fontSize:16,
                fontWeight:"600",
                 marginVertical:5,
                 alignSelf:"center"
                 }}>{item.vote_average}</Text>

              </View>
              
              </View>
              <View style={{justifyContent:"flex-end"}}>
              <Text style={{
                color:"#919294",
                fontSize:10,
                fontWeight:"600",
                 marginVertical:5,
                  marginLeft:10,
                 }}>Action and Adventure</Text>
                 </View>
              </View>
            );
          }}
        />
        </View>

        <View style={style.innerFirstSection}>
          <Text style={{color:"#919294",fontSize:16}}>LIVE CHANNELS</Text>

          <TouchableOpacity>
            <Text style={{color:"#e4264e",fontSize:16,fontWeight:"600"}}>Show All</Text>
          </TouchableOpacity>
        </View>
        <View>
        <FlatList
          style={{marginBottom: 10, backgroundColor: '#181f29'}}
          horizontal={true}

          data={this.props.liveData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <Image
                  source={{
                    uri:  item.url,
                  }}
                  style={style.imageStart3}
                />
              </TouchableOpacity>
            );
          }}
        />
        </View>
        <View style={style.innerFirstSection}>
          <Text style={{color:"#919294",fontSize:16}}>POPULAR</Text>

          <TouchableOpacity>
            <Text style={{color:"#e4264e",fontSize:16,fontWeight:"600"}}>Show All</Text>
          </TouchableOpacity>
        </View>

        <View>
        <FlatList
          style={{marginBottom: 10, backgroundColor: '#181f29'}}
          horizontal={true}

          data={this.props.moviesData}
          renderItem={({item}) => {
            return (
              <View style={{marginHorizontal:10,width:140}}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
                  }}
                  style={style.imageStart4}
                />
              </TouchableOpacity>

              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{flex:0.8}}>

              <Text style={{
                color:"#919294",
                fontSize:16,
                fontWeight:"600",
                 marginVertical:10,
                 alignSelf:"center"
                 }}>{item.original_title}</Text>
              </View>
              <View style={{flex:0.2,marginHorizontal:5,marginVertical:8}}>
              <Image source={this.state.ratings} 
                      style={{
                        height:20,
                        alignSelf:"center",
                        width:20,
                     
                        resizeMode:"contain"}} />
               <Text style={{
                color:"#919294",
                fontSize:16,
                fontWeight:"600",
                 marginVertical:5,
                 alignSelf:"center"
                 }}>{item.vote_average}</Text>

              </View>
              
              </View>
              <View style={{justifyContent:"flex-end"}}>
              <Text style={{
                color:"#919294",
                fontSize:10,
                fontWeight:"600",
                 marginVertical:5,
                  marginLeft:10,
                 }}>Action and Adventure</Text>
                 </View>
              </View>
            );
          }}
        />
        </View>

        <View style={style.innerFirstSection}>
          <Text style={{color:"#919294",fontSize:16}}>CATEGORIES</Text>

          <TouchableOpacity>
            <Text style={{color:"#e4264e",fontSize:16,fontWeight:"600"}}>Show All</Text>
          </TouchableOpacity>
        </View>
          <View>
        <FlatList
          style={{marginBottom: 10, backgroundColor: '#181f29'}}
          horizontal={true}

          data={this.props.categoryData}
          renderItem={({item}) => {
            return (
              <View style={{marginHorizontal:20}}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri:  item.image,
                  }}
                  style={style.imageStart5}
                />
              </TouchableOpacity>

            
             
              </View>
            );
          }}
        />
        </View>

        </ScrollView>

      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  imageStart: {
    height: 240,
    width: 350,
    resizeMode:"stretch",
    marginLeft: 15,
    marginVertical: 0,
    borderRadius: 10,
   
  },
  imageStart3: {
    height: 100,
    width: 100,
    resizeMode:"stretch",
    marginLeft: 15,
    marginVertical: 0,
    borderRadius: 50,
   
  },
  imageStart2:{
    height: 140,
    width: 140,
    resizeMode:"stretch",
    
    
    borderRadius: 10,
    
   
  },
  imageStart4:{
    height: 140,
    width: 180,
    resizeMode:"center",
    
    
    borderRadius: 10,
    
   
  },
  imageStart5:{
    height: 140,
    width: 200,
    resizeMode:"stretch",
    
    
    marginHorizontal:15,
    
   
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
  liveData: state.data_Reducer.liveData,
  categoryData: state.data_Reducer.categoryData
});

const mapDispatchToProps = {
  fetchMovieData: dataFetch,
  fetchLiveData: fetchLiveChannels,
  fetchCategories: fetchCategories
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home2);
