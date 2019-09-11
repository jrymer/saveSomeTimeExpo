import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { toggleStopwatchRunning } from '../store/stopwatchState/stopwatch.actions';
import { IAppProps, ISaveSomeTimeState } from '../models/saveSomeTime';


class StopWatchButtonContainer extends React.Component<IAppProps> {
  constructor(props) {
    super(props);
  }

  private toggleStopwatch = () => {
    this.props.toggleStopwatchRunning();
    console.log(this.props.stopwatchState);
  }

  render (){
    console.log(this.props);
    return (
      <View>
        <Text>BUttong container</Text>
        <Button onPress={this.toggleStopwatch} title="Start"></Button>
      </View>
    )
  }
}

const mapStateToProps = (state: ISaveSomeTimeState) => {
  const { stopwatchState } = state;
  return { stopwatchState };
};

export default connect(mapStateToProps, { toggleStopwatchRunning })(StopWatchButtonContainer);