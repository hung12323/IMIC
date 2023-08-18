import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getMovieDetails} from './movieActions';

const MovieDetailScreen = () => {
  const dispatch = useDispatch();
  const movieData = useSelector((state: any) => state.data);
  const isLoading = useSelector((state: any) => state.isLoading);
  const error = useSelector((state: any) => state.error);

  useEffect(() => {
    dispatch(getMovieDetails(20235714));
  }, [dispatch]);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
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
      <Text>Title: {movieData?.title}</Text>
      <Text>Overview: {movieData?.overview}</Text>
      <Text>Overview: {movieData?.iso_639_1}</Text>
      <Text>Avatar: {movieData?.iso_3166_1}</Text>
      <Text>Avatar: {movieData?.name}</Text>
      <Text>Avatar: {movieData?.include_adult}</Text>
      <Text>Avatar: {movieData?.username}</Text>
    </View>
  );
};

export default MovieDetailScreen;
