import { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div className={css.task1}>
        <div className={css.task1__title}>
          <h5>Please leave feedback</h5>
        </div>
        <div className={css.task1__buttons}>
          <button
            type="button"
            onClick={this.handleGood}
            className={css.task1__buttons_btn}
          >
            Good
          </button>
          <button
            type="button"
            onClick={this.handleNeutral}
            className={css.task1__buttons_btn}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={this.handleBad}
            className={css.task1__buttons_btn}
          >
            Bad
          </button>
        </div>
        <div className={css.task1__title}>
          <h5>Statistics</h5>
        </div>
        <div className={css.task1__text}>
          <p className={css.task1__text_p}>
            Good:<span>{this.state.good}</span>
          </p>
          <p className={css.task1__text_p}>
            Neutral: <span>{this.state.neutral}</span>
          </p>
          <p className={css.task1__text_p}>
            Bad:<span>{this.state.bad}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Statistics;
