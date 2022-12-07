import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedbackScore = e => {
    const clickedBtn = e.target.textContent;
    this.setState(prevState => ({
      [clickedBtn]: (prevState[clickedBtn] += 1),
    }));
  };

  countTotalFeedback = () => {
    const arrToSum = Object.values(this.state);

    return arrToSum.reduce((total, score) => {
      return score + total;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addFeedbackScore}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalScore={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
