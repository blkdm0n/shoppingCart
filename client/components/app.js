//this component holds everything else

//this helps when we use this with ReactDOMServer in NODE!!!!
const React = require('react');

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
