import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import { observe } from './Game';

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    // <Board knightPosition={[0,0]} />,
    <Board knightPosition={knightPosition} />,
    rootEl
  )
);