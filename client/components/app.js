//this component holds everything else

import Snake from './snake';
class App extends React.Component {
  state = {data: 'here is some data for you'}
  render() {
    return (
    <div>
      <h3>Here is the state of this component: {this.state.data}</h3>
      <Snake/>
    </div>
    );
  }
}

export default App;