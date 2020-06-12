import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { goToNextQuestion } from '../actions/game';

class NextButton extends React.Component {
  render() {
    const { goToNext } = this.props;
    
    return (
      <button
      data-testid="btn-next"
      type="button"
      onClick={goToNext}
    >
      Próxima
    </button>
    )
  }
}

const mapStateToProps = (state) => ({
  id: state.gameReducer.questionID,
});

const mapDispatchToProps = (dispatch) => ({
  goToNext: () => dispatch(goToNextQuestion()),
});

NextButton.propTypes = {
  goToNext: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
