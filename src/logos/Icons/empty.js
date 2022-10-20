import React from 'react';
import PropTypes from 'prop-types';

const EMPTY = (props) => {
  const { size } = props;
  return (<></>);
};

EMPTY.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EMPTY.defaultProps = {
  size: '100',
};

export default EMPTY;
