import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const checkStatistics = () => {
    const totalFeedback = good + neutral + bad;
    const positiveFeedbackPercentage = (good / (good + neutral + bad) * 100)
    if ((good + neutral + bad) === 0) {
      return <Notification message="There is no feedback"></Notification>
    } else {
      return <Statistics
        good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positiveFeedbackPercentage.toFixed(2)}
      />
    }
  }

  const feedbackCounter = (event) => {
    const btnName = event.target.title;
    switch (btnName) {
      case 'good': {
        setGood(good + 1)
        break
      }
      case 'neutral': {
        setNeutral(neutral + 1)
        break
      }
      case 'bad': {
        setBad(bad + 1)
        break
      }
      default: {
        return
      }
    }
  }

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
          options={['good', 'neutral', 'bad']} onLeaveFeedback={feedbackCounter}
        />
      </Section>
      <Section title="Statistics">
        {checkStatistics()}
      </Section>
    </div>
  );
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