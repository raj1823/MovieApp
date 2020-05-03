import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView 
} from 'react-native';
import {connect} from 'react-redux';
import { } from 'react-native-gesture-handler';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.route.params.detail,
    };
  }
  componentDidMount() {}
  showMovieDetails(movie){
    this.setState({movie:movie})
  }
  getMovieName() {
    const {movie} = this.state;
    if (movie.original_name) return movie.original_name;
    else if (movie.original_title) return movie.original_title;
    else return movie.title;
  }

  render() {
    console.log('movie :', this.state.movie);
    const {movie} = this.state;
    return (
        
      <View style={style.container}>
        
        <View style={{flex: 1}}>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            }}
            style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
          />
        </View>
    
        <ScrollView  style={{flex:1}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1.2}}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 32,
                color: '#fff',
                paddingVertical: 10,
                fontWeight: '800',
              }}>
              {this.getMovieName()}
            </Text>

            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
              <Image
                source={require('../../assets/ratings.png')}
                style={{
                  height: 25,
                  width: 25,
                  resizeMode: 'contain',
                  marginHorizontal: 5,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#fff',
                  alignSelf: 'center',
                }}>
                {movie.vote_average}/10
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: '#fff',
                  marginHorizontal: 20,
                  alignSelf: 'center',
                }}>
                {movie.original_language + '       '}
                {movie.media_type + '       '}
                {movie.release_date}
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 15,
                marginVertical: 15,
                height: 90,
              
              }}>
              <Text
                style={{fontSize: 12, color: '#fff', paddingHorizontal: 10}}>
                {movie.overview}
              </Text>
            </View>
            <TouchableOpacity>
              <View style={{backgroundColor: '#fff', marginHorizontal: 20}}>
                <Text
                  style={{
                    fontSize: 15,
                    paddingVertical: 10,
                    alignSelf: 'center',
                  }}>
                  PLAY
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{flex: 1, marginHorizontal: 15}}>
            <Text style={{color: '#fff', fontSize: 16, paddingTop: 10,paddingHorizontal:5}}>
              MORE LIKE THIS
            </Text>

            <FlatList
              style={{marginBottom: 10, backgroundColor: '#181f29'}}
              horizontal={true}
              data={this.props.moviesData}
              renderItem={({item}) => {
                return (
                    <View style={{marginHorizontal:10}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.showMovieDetails(item);
                    }}>
                    <Image
                      source={{
                        uri:
                          'https://image.tmdb.org/t/p/w500' +
                          item.backdrop_path,
                      }}
                      style={style.imageStart4}
                    />
                  </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
        </ScrollView>
      </View>
      
      
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#181f29',
    flex: 1,
  },
  imageStart4:{
    height: 140,
    width: 180,
    resizeMode:"contain",
    
    
    borderRadius: 10,
    
   
  },
});

const mapStateToProps = state => ({

    moviesData: state.data_Reducer.storedData,
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetails);
