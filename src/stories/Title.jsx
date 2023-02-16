import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

/**
 * Primary UI component for user interaction
 */
export const Title = ({ padding,backgroundColor, label, ...props }) => {
 
  return (
    <div
      className={['topnav']}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <div style={padding && {padding}}> {label} </div>
    </div>
  );
};

Title.propTypes = {
  backgroundColor: PropTypes.string,
  padding:PropTypes.string,
  label:PropTypes.string,
};

Title.defaultProps = {
  backgroundColor: null,
  padding:'1px',
  label:'ChatApp'
};