import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
    
  };
  
  countPositiveFeedbackPercentage = () => { 
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  onLeaveFeedback = (event) => {
    const name = event.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    console.log(total);
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const objKey = Object.keys(this.state);

    return (
      <div
        style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'left',
        fontSize: 40,
        color: '#010101',
        margin: '0 0 0 50px'
      }}
      >
        < Section text="Please leave Feedback">
          <FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        { total === 0 ? (
            <Notification message="There is no feedback" />
          ):( <Section text="Statistic">
                  <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={positivePercentage}
                  />
              </Section>)
          }  
      </div>
    );
  }
};

export default App;