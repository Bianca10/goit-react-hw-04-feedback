import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions ';
import Statistics from './Statistics';
import Notification from './Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const options = Object.keys(feedback);
  const totalFeedback = options.reduce(
    (total, option) => total + feedback[option],
    0
  );

  return (
    <div>
      <h1>Plese leave feedback</h1>
      <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      {totalFeedback > 0 ? (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positivePercentage={(feedback.good / totalFeedback) * 100}
        />
      ) : (
        <Notification message="Nu există feedback" />
      )}
    </div>
  );
};
