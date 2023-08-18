import {Dispatch} from 'redux';

export const ADDITION_REQUEST = 'ADDITION_REQUEST';
export const ADDITION_SUCCESS = 'ADDITION_SUCCESS';
export const SUBTRACTION_REQUEST = 'SUBTRACTION_REQUEST';
export const SUBTRACTION_SUCCESS = 'SUBTRACTION_SUCCESS';
export const MULTIPLICATION_REQUEST = 'MULTIPLICATION_REQUEST';
export const MULTIPLICATION_SUCCESS = 'MULTIPLICATION_SUCCESS';
export const DIVISION_REQUEST = 'DIVISION_REQUEST';
export const DIVISION_SUCCESS = 'DIVISION_SUCCESS';

export const performAddition = (num1: number, num2: number) => {
  return (dispatch: Dispatch) => {
    dispatch({type: ADDITION_REQUEST});

    setTimeout(() => {
      const result = num1 + num2;
      dispatch({type: ADDITION_SUCCESS, payload: result});
    }, 200);
  };
};

export const performSubtraction = (num1: number, num2: number) => {
  return (dispatch: Dispatch) => {
    dispatch({type: SUBTRACTION_REQUEST});

    setTimeout(() => {
      const result = num1 - num2;
      dispatch({type: SUBTRACTION_SUCCESS, payload: result});
    }, 200);
  };
};

export const performMultiplication = (num1: number, num2: number) => {
  return (dispatch: Dispatch) => {
    dispatch({type: MULTIPLICATION_REQUEST});

    setTimeout(() => {
      const result = num1 * num2;
      dispatch({type: MULTIPLICATION_SUCCESS, payload: result});
    }, 200);
  };
};

export const performDivision = (num1: number, num2: number) => {
  return (dispatch: Dispatch) => {
    dispatch({type: DIVISION_REQUEST});

    setTimeout(() => {
      const result = num1 / num2;
      dispatch({type: DIVISION_SUCCESS, payload: result});
    }, 200);
  };
};
