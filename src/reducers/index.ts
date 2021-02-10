import { combineReducers, Reducer } from "redux";
import YogaPlaces, { IYogaPlacesInitialState } from "./YogaPlaces";
import HockeyPlaces, {
  IHockeyPlacesInitialState,
  HockeyPlacesActions
} from "./HockeyPlaces";

export interface ISportPlacesReducer {
  YogaPlaces: IYogaPlacesInitialState;
  HockeyPlaces: IHockeyPlacesInitialState;
}

export type ISportPlacesActions = HockeyPlacesActions | any;

const rootReducer: Reducer<
  ISportPlacesReducer,
  ISportPlacesActions
> = combineReducers<ISportPlacesReducer, ISportPlacesActions>({
  YogaPlaces,
  HockeyPlaces
});

export default rootReducer;
