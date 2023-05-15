import React, { Component } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Layout } from './Layout/Layout';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    this.setState({ [event]: this.state[event] + 1 });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prevValue, elem) => {
      return prevValue + elem;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    if (total !== 0) {
      return ((this.state.good / total) * 100).toFixed(0);
    } else {
      return 0;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          )}
        </Section>
      </Layout>
    );
  }
}
