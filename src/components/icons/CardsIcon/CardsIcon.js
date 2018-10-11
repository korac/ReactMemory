import React from 'react';
import PropTypes from 'prop-types';

const CardsIcon = props => {
  return (
    <div className={props.className} style={{ ...props.style }}>
      <svg
        version="1.1"
        fill="#1e72bb"
        x="0px"
        y="0px"
        viewBox="0 0 612 760"
        enableBackground="new 0 0 612 792"
      >
        <g>
          <path d="M198.1,507c11.4,0,20.7-9.2,20.6-20.6V205.8c0-2.1,1.7-3.8,3.8-3.8H365c11.4,0,20.6-9.2,20.6-20.6s-9.2-20.6-20.6-20.6   H222.5c-24.8,0-45,20.2-45,45v280.6C177.5,497.8,186.7,507,198.1,507z" />
          <path d="M227.4,566l-36.5,23.6c-1,0.5-2,0.4-2.6,0.2c-0.7-0.2-1.7-0.6-2.3-1.7l-140.3-243c-0.7-1.1-0.6-2.2-0.4-2.9   s0.6-1.7,1.7-2.3l86.5-51.6c9.8-5.9,13-18.5,7.2-28.3c-5.9-9.8-18.5-13-28.3-7.2l-86.2,51.4c-10.3,6-17.7,15.7-20.8,27.3   c-3.1,11.7-1.5,23.8,4.5,34.2l140.2,242.9c6,10.4,15.8,17.9,27.4,21c3.9,1.1,7.9,1.6,11.8,1.6c7.8,0,15.5-2,22.5-6l0.5-0.3   l37.5-24.3c9.6-6.2,12.3-18.9,6.1-28.5C249.7,562.5,237,559.8,227.4,566z" />
          <path d="M606.6,320.7c-3.2-11.7-10.6-21.4-21-27.4L460.4,221c-6.8-3.9-14.5-6-22.4-6c-16.1,0-31.1,8.6-39.1,22.5l-140.3,243   c-6,10.4-7.6,22.6-4.5,34.2c3.2,11.7,10.6,21.4,21,27.4l125.3,72.3c6.8,3.9,14.5,6,22.4,6c16.1,0,31-8.7,39-22.5l140.3-243   C608.1,344.5,609.7,332.3,606.6,320.7z M566.3,334.3L426,577.3c-0.7,1.4-2.2,1.9-3.3,1.9c-0.6,0-1.2-0.2-1.8-0.5l-125.2-72.3   c-1.1-0.6-1.5-1.6-1.7-2.3c-0.1-0.7-0.2-1.8,0.4-2.9l140.3-243c0.7-1.4,2.2-1.9,3.3-1.9c0.6,0,1.2,0.1,1.7,0.5l125.2,72.3   c1.1,0.6,1.5,1.6,1.7,2.3S566.9,333.2,566.3,334.3z" />
        </g>
      </svg>
    </div>
  );
};

CardsIcon.propTypes = {
  style: PropTypes.object.isRequired
};

export default CardsIcon;
