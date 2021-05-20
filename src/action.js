import {ADD_COUNTRIES} from '../src/actionTypes';

export const addCountries = (countryList) => ({
    type: ADD_COUNTRIES,
    payload: countryList
})