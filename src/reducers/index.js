import * as types from '../actionTypes.js';

const initialState = {
    countries: []
}

const countriesReducer = (state = initialState, action) => {

  switch(action.type) {
    case types.ADD_COUNTRIES: {
      const countries = state.countries;
      countries.push(action.payload)  
    
      return {
        ...state,
        countries
      }
    }
  }  
}