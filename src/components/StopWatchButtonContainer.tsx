import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { toggleStopwatchRunning, setStopwatchTime } from '../store/stopwatchState/stopwatch.actions';
import { IAppProps, ISaveSomeTimeState } from '../models/saveSomeTime';

interface IStopWatchButtonContainerState {
  stopwatch: number;
}

class StopWatchButtonContainer extends React.Component<IAppProps, IStopWatchButtonContainerState> {
  constructor(props) {
    super(props);

    this.state = {
      stopwatch: 0
    };
  }

  private toggleStopwatch = () => {
    this.props.toggleStopwatchRunning();
    this.setState((prevState: IStopWatchButtonContainerState) => ({ stopwatch: prevState.stopwatch + 1 }));
    console.log(this.state.stopwatch);
    this.props.setStopwatchTime(this.state.stopwatch);
  }

  render (){
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

export default connect(mapStateToProps, { toggleStopwatchRunning, setStopwatchTime })(StopWatchButtonContainer);