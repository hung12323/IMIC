import React from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  performAddition,
  performSubtraction,
  performMultiplication,
  performDivision,
} from './calculatorActions';

const Calculator: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.loading);
  const result = useSelector((state: any) => state.result);

  const calculateAddition = () => {
    dispatch(performAddition(10, 5));
  };

  const calculateSubtraction = () => {
    dispatch(performSubtraction(10, 5));
  };

  const calculateMultiplication = () => {
    dispatch(performMultiplication(10, 5));
  };

  const calculateDivision = () => {
    dispatch(performDivision(10, 5));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <View style={{marginBottom: 10}}>
            <Button title="Phép cộng" onPress={calculateAddition} />
          </View>
          <View style={{marginBottom: 10}}>
            <Button title="phép trừ" onPress={calculateSubtraction} />
          </View>
          <View style={{marginBottom: 10}}>
            <Button title="Phép nhân" onPress={calculateMultiplication} />
          </View>
          <View style={{marginBottom: 10}}>
            <Button title="Phép chia" onPress={calculateDivision} />
          </View>
        </View>
      )}

      {result !== null && (
        <Text style={{fontSize: 24, marginTop: 20}}>Kết quả: {result}</Text>
      )}
    </View>
  );
};

export default Calculator;
