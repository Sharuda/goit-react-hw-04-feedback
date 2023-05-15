import React from 'react';
import PropTypes from 'prop-types';
import { StatInfo } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <StatInfo>Good: {good}</StatInfo>
      <StatInfo>Neutral: {neutral}</StatInfo>
      <StatInfo>Bad: {bad}</StatInfo>
      <StatInfo>Total: {total}</StatInfo>
      <StatInfo>Positive feedback: {positivePercentage} %</StatInfo>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
