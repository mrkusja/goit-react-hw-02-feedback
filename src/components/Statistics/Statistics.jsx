import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalScore,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>
        <p>Good: {good} </p>
      </li>
      <li>
        <p>Neutral: {neutral} </p>
      </li>
      <li>
        <p>Bad: {bad} </p>
      </li>
      <li>
        <p>Total: {totalScore} </p>
      </li>
      <li>
        <p>Positive Feedback: {positivePercentage} % </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
