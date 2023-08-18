import * as React from 'react';
import {View, Text, StyleSheet,FlatList,Image} from 'react-native';
import { } from 'react-native-gesture-handler';

type Result = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};
interface Root {
  page?: number;
  results?: Result[];
  total_pages?: number;
  total_results?: number;
  
}

export function About() {
  const [data, setData] = React.useState<Root | undefined>();

  const getMoviesFromApi = () => {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=f91a6fa5f3b47945b773d716d9579059')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json as Root;
      })
      .catch(error => {
        console.error(error);
        return undefined;
      });
  };

  React.useEffect(() => {
    getMoviesFromApi().then(response => setData(response));
  }, []);

  return (
    <View style={styles.container}>
     
      {data === undefined ? (
        <Text>Loading ...</Text>
      ) : (
        <MovieComponent post={data} />
      )}
    </View>
  );
}

export interface Props {
  post: Root;
}

const MovieComponent: React.FC<Props> = props => {
  const renderMovie = ({ item }) => {
    const backdropUrl = `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;

    return (
      <View style={styles.list}>
        
        <Image source={{ uri: backdropUrl }} style={styles.backdropImage} />
        <View style={styles.txtlist}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>Date: {item.release_date}</Text>
          <Text>Vote_average: {item.vote_average}</Text>
          <Text>Vote_count: {item.vote_count}</Text>
          <Text>Vote_count: {item.title}</Text>
        </View>
        
      </View>
    );
  };
  // console.log(props);
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize:30, color:'#000', marginBottom:10}}>Danh sách film phổ biến</Text>
      <FlatList
      data={props.post.results}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title:{
    fontSize: 20,
    color: '#000'
  },
    backdropImage:{
      width: 150,
      height: 150,
      marginHorizontal:10
    },
    txtlist:{
      padding: 10,
      justifyContent: 'space-between',
      
    },
    list:{
      flexDirection: 'row',
      marginBottom: 10
    },
});
export default About;