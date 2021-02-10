import { call, put } from 'redux-saga/effects';
import APIHelper from './API';
import { SportPlacesActionTypes } from '../actions/ActionTypes';
import { IPlaces } from '../reducers/HockeyPlaces';

// worker Saga: will be fired on SportPlacesActionTypes.FETCH_ICE_HOCKEY_PLACES actions
export function* fetchIceHockeyPlaces() {
    try {
        const URl = 'https://sportplaces.api.decathlon.com/api/v1/places?origin=-73.582,45.511&radius=99&sports=175';
        const news: IPlaces = yield call(APIHelper.APICall, URl);
        yield put({
            type: SportPlacesActionTypes.FETCH_ICE_HOCKEY_PLACES_SUCCEEDED,
            hockeyPlaces: news.data.features
        });
    } catch (e) {
        yield put({
            type: SportPlacesActionTypes.FETCH_ICE_HOCKEY_PLACES_FAILED,
            hockeyPlacesError: e.message
        });
    }
}
