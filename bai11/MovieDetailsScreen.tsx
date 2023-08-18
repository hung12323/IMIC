import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMovieDetails} from '../bai11/movies/actions';

interface RootState {
  movieDetails: {
    loading: boolean;
    error: string | null;
    details: any | null;
  };
}

interface MovieDetailsScreenProps {
  movieId: number;
}

const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = ({movieId}) => {
  const dispatch = useDispatch();
  const {loading, error, details} = useSelector(
    (state: RootState) => state.movieDetails,
  );

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Title: {details?.title}</Text>
      <Text>Overview: {details?.overview}</Text>
      {/* Hiển thị các thông tin khác về bộ phim */}
    </View>
  );
};

export default MovieDetailsScreen;
