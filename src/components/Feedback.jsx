import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Feedback = () => (
  <div>
    <div>
      <Header shouldShowScore />
    </div>
    <h1>This is the <strong>Feedback</strong> page</h1>
    <Link to="/">
      <button data-testid="btn-play-again">Jogar Novamente</button>
    </Link>
    <Link to={'/ranking'}>
      <button data-testid="btn-ranking">Ver Ranking</button>
    </Link>
  </div>
);

export default Feedback;
