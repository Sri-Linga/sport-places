import { Reducer } from 'redux';
import { SportPlacesActionTypes } from '../actions/ActionTypes';

export type actions =
    | {
          type: SportPlacesActionTypes.FETCH_YOGA_PLACES_SUCCEEDED;
          yogaPlaces: any;
      }
    | {
          type: SportPlacesActionTypes.FETCH_YOGA_PLACES_FAILED;
          yogaPlacesError: any;
      };

export interface IFeatures {
    properties: {
        activities: Array<any>;
        address_components: {
            address: string;
            city: string;
            country: string;
            postal_code: null;
            province: string;
        };
        created_at: string;
    };
}

export interface IPlaces {
    count?: number;
    data: { type: string; features: Array<IFeatures> };
    links?: any;
}

export interface IYogaPlacesInitialState {
    YogaPlaces: Array<IFeatures>;
    YogaPlacesError: string;
}
export const initialState: IYogaPlacesInitialState = {
    YogaPlaces: [],
    YogaPlacesError: ''
};

const YogaPlaces: Reducer<IYogaPlacesInitialState> = (state = initialState, action: actions | any) => {
    switch (action.type) {
        case SportPlacesActionTypes.FETCH_YOGA_PLACES_SUCCEEDED:
            return {
                ...state,
                YogaPlaces: action.yogaPlaces
            };
        case SportPlacesActionTypes.FETCH_YOGA_PLACES_FAILED:
            return {
                ...state,
                YogaPlacesError: action.yogaPlacesError
            };
        default: {
            return state;
        }
    }
};

export default YogaPlaces;
