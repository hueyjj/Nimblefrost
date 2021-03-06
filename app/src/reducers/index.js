import { combineReducers } from 'redux';

import player from '../reducers/player';
import library from "../reducers/library";
import track from "../reducers/track";
import youtube from "../reducers/youtube";
import config from "../reducers/config";
import app from "../reducers/app";

const rootReducer = combineReducers({
  player,
  library,
  track,
  youtube,
  config,
  app,
});

export default rootReducer
