import { takeLatest } from "redux-saga/effects";
import { SportPlacesActionTypes } from "../actions/ActionTypes";
import { fetchIceHockeyPlaces } from "./HockeyPlacesSaga";
import { fetchYogaPlaces } from "./YogaPlacesSaga";

/**
 * Rootsaga
 */
function* rootSaga() {
  yield takeLatest(
    SportPlacesActionTypes.FETCH_ICE_HOCKEY_PLACES,
    fetchIceHockeyPlaces
  );
  yield takeLatest(SportPlacesActionTypes.FETCH_YOGA_PLACES, fetchYogaPlaces);
}

export default rootSaga;
