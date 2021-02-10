import { call, put } from 'redux-saga/effects';
import APIHelper from './API';
import { SportPlacesActionTypes } from '../actions/ActionTypes';
import { IPlaces } from '../reducers/YogaPlaces';

// worker Saga: will be fired on SportPlacesActionTypes.FETCH_YOGA_PLACES actions
export function* fetchYogaPlaces() {
    try {
        const URl = 'https://sportplaces.api.decathlon.com/api/v1/places?origin=-73.582,45.511&radius=99&sports=292';
        const news: IPlaces = yield call(APIHelper.APICall, URl);
        yield put({
            type: SportPlacesActionTypes.FETCH_YOGA_PLACES_SUCCEEDED,
            yogaPlaces: news.data.features
        });
    } catch (e) {
        yield put({
            type: SportPlacesActionTypes.FETCH_YOGA_PLACES_FAILED,
            yogaPlacesError: e.message
        });
    }
}
