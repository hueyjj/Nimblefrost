import React from 'react';
import { connect } from 'react-redux';

import TrackList from '../components/TrackList';
import { setTrack } from "../actions/TrackActions";
import { play } from "../actions/PlayerActions";

const TrackListContainer = (props) => {
  return (
    <TrackList {...props} />
  );
};

const mapStateToProps = (state) => {
  const { library, track } = state;
  const { trackList } = library;

  return {
    track,
    trackList,
  };
};

const mapDispatchToProps = {
  setTrack,
  play,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackListContainer);