import PropTypes from 'prop-types';
import { List, Item } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {Object.keys(options).map(name => {
        return (
          <Item key={name}>
            <button type="button" onClick={onLeaveFeedback}>
              {name}
            </button>
          </Item>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
