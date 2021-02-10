import { SportPlacesActionTypes } from "./ActionTypes";

export const fetchIceHockeyPlaces = (payload?: string) => (dispatch: any) => {
  dispatch({
    type: SportPlacesActionTypes.FETCH_ICE_HOCKEY_PLACES,
    payload
  });
};
