import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';
import Label from './components/Label/Label';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Button size="large" color= "red">Hello</Button>, document.getElementById('button'));
ReactDOM.render(<Label background="green" color="black">Label</Label>, document.getElementById('label'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
