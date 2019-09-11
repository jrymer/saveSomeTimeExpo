import React from 'react';
import { View, Text } from 'react-native';
import StopWatchButtonContainer from '../components/StopWatchButtonContainer';
import { connect } from 'react-redux';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Home View</Text>
        <StopWatchButtonContainer></StopWatchButtonContainer>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { stopWatchState } = state;
  return { stopWatchState };
};

export default connect(mapStateToProps)(HomeView);
