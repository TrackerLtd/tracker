import React from 'react';

const Alert = ({ type, children }) => <div className={'alert alert-' + type}>
  { children }
</div>

export default Alert;
