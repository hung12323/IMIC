import * as React from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
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
      <Text style={styles.title}>Danh sách film phổ biến</Text>
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
  console.log(props);
  return (
   <ScrollView>
   <Text>Page : {props.post.page}</Text>
     
      <Text>Results </Text>
      {props.post.results?.map(result => (
        <Text key={result.id}>
          {result.adult} 
          - {result.backdrop_path} 
          - {result.genre_ids}
          - {result.id}
          - {result.original_language} 
          - {result.original_title} 
          - {result.overview}
          - {result.poster_path} 
          - {result.release_date}
          - {result.title}
          - {result.video} 
          - {result.vote_average} 
          - {result.vote_count}
          
        </Text>
        
      ))}
       <Text>total_pages : {props.post.total_pages}</Text>
      <Text>total_results : {props.post.total_results}</Text>
</ScrollView>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000',
   marginBottom:10
    },
});
export default About;