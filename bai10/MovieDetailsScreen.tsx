import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {fetchMovieDetails} from './actions/movieActions';
import {AppState, MovieDetails} from './types';
interface MovieDetailsScreenProps {
  movieId: number;
}

const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = ({movieId}) => {
  const dispatch = useDispatch();
  const movie = useSelector((state: AppState) => state.movie);
  const isLoading = useSelector((state: AppState) => state.isLoading);
  const error = useSelector((state: AppState) => state.error);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Title: {movie?.title}</Text>
      <Text>Overview: {movie?.overview}</Text>
      <Text>Overview: {movie?.iso_639_1}</Text>
      <Text>Avatar: {movie?.iso_3166_1}</Text>
      <Text>name: {movie?.name}</Text>
      <Text>Avatar: {movie?.include_adult}</Text>
      <Text>username: {movie?.username}</Text>
    </View>
  );
};

export default MovieDetailsScreen;
