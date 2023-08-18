import {
  ADDITION_REQUEST,
  ADDITION_SUCCESS,
  SUBTRACTION_REQUEST,
  SUBTRACTION_SUCCESS,
  MULTIPLICATION_REQUEST,
  MULTIPLICATION_SUCCESS,
  DIVISION_REQUEST,
  DIVISION_SUCCESS,
} from './calculatorActions';

interface CalculatorState {
  loading: boolean;
  result: number | null;
}

const initialState: CalculatorState = {
  loading: false,
  result: null,
};

const calculatorReducer = (
  state = initialState,
  action: any,
): CalculatorState => {
  switch (action.type) {
    case ADDITION_REQUEST:
    case SUBTRACTION_REQUEST:
    case MULTIPLICATION_REQUEST:
    case DIVISION_REQUEST:
      return {
        ...state,
        loading: true,
        result: null,
      };
    case ADDITION_SUCCESS:
    case SUBTRACTION_SUCCESS:
    case MULTIPLICATION_SUCCESS:
    case DIVISION_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default calculatorReducer;
