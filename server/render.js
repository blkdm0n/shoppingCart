const React = require('react');
//imports our code from React (front-end) to Node (backend)
//try to convert it to string so we can serve it

//requires our already written client code
//don't mix import and require you may get errors
import App from '../client/components/app';

//takes a react application and converts it to a string
const ReactDOMServer = require('react-dom/server');

//use render to string to create a variable
export default () => {
  return ReactDOMServer.renderToString(<App/>);
};
