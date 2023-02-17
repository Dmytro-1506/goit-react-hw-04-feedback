import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good+neutral+bad)
  }

  countPositiveFeedbackPercentage = () => {
    return (this.state.good/this.countTotalFeedback()*100)
  }

  checkStatistics = () => {
    const { good, neutral, bad } = this.state;
    if (this.countTotalFeedback() === 0) {
      return <Notification message="There is no feedback"></Notification>
    } else {
      return <Statistics
        good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage().toFixed(2)}
      />
    }
  }

  FeedbackCounter = (event) => {
    const btnName = event.target.title;
    this.setState({ [btnName]: this.state[btnName]+1 });
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']} onLeaveFeedback={this.FeedbackCounter}
          />
        </Section>
        <Section title="Statistics">
            {this.checkStatistics()}
        </Section>
      </div>
    );
  }
}

const Section = ({ title, children }) => {
  return <div className='section'>
  <p>{title}</p>
    <div>{children}</div>
    </div>
}

const Notification = ({ message }) => {
  return message
}