import React from 'react';

import ReactDOM from 'react-dom';

import JumboCard from './components/App.jsx';
import './style.scss';
var endPoint = window.location.pathname === '/' ? 5 : window.location.pathname.slice(1);
//console.log('test', endPoint);
ReactDOM.render(<JumboCard endpoint={endPoint} />, document.getElementById('jumbo-card'));