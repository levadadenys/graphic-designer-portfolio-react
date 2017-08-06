import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="col-md-10 col-xs-10">
    <Link to="/about">
      <p>404. Not found.</p>
    </Link>
  </div>
);
