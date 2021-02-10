import { SportPlacesActionTypes } from "./ActionTypes";

export const fetchYogaPlaces = (payload?: string) => (dispatch: any) => {
  dispatch({
    type: SportPlacesActionTypes.FETCH_YOGA_PLACES,
    payload
  });
};
