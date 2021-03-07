import React from 'react';

import "./loading-screen.css";

const LoadingScreen = () => {

  return (
    <div className="circ">
      <div className="load">Loading . . . </div>
      <div className="hands" />
      <div className="body" />
      <div className="head">
        <div className="eye" />
      </div>
    </div>
  );
};

export {LoadingScreen};
