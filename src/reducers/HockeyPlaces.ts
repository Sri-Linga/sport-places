import { Reducer } from 'redux';
import { SportPlacesActionTypes } from '../actions/ActionTypes';

export type HockeyPlacesActions =
    | {
          type: SportPlacesActionTypes.FETCH_ICE_HOCKEY_PLACES_SUCCEEDED;
          hockeyPlaces: any;
      }
    | {
          type: SportPlacesActionTypes.FETCH_ICE_HOCKEY_PLACES_FAILED;
          hockeyPlacesError: any;
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

export interface IHockeyPlacesInitialState {
    HockeyPlaces: Array<IFeatures>;
    HockeyPlacesError: string;
}

export const initialState: IHockeyPlacesInitialState = {
    HockeyPlaces: [],
    HockeyPlacesError: ''
};

const HockeyPlaces: Reducer<IHockeyPlacesInitialState> = (state = initialState, action: HockeyPlacesActions | any) => {
    switch (action.type) {
        case SportPlacesActionTypes.FETCH_ICE_HOCKEY_PLACES_SUCCEEDED:
            return {
                ...state,
                HockeyPlaces: action.hockeyPlaces
            };
        case SportPlacesActionTypes.FETCH_ICE_HOCKEY_PLACES_FAILED:
            return {
                ...state,
                HockeyPlacesError: action.hockeyPlacesError
            };
        default: {
            return state;
        }
    }
};

export default HockeyPlaces;
