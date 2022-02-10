const initialState = {
  favCitiesList: [],
};

const ADD_CITY = 'ADD_CITY';
const REMOVE_CITY = 'REMOVE_CITY';

export const favListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        favCitiesList: [...state.favCitiesList, action.payload],
      };
    case REMOVE_CITY:
      return {
        ...state,
        favCitiesList: state.favCitiesList.filter(
          item => item.city !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export const addCityAction = payload => ({
  type: ADD_CITY,
  payload,
});
export const removeCityAction = payload => ({
  type: REMOVE_CITY,
  payload,
});
