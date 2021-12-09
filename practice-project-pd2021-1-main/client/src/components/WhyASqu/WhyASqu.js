import React from 'react';

function WhyASqu(props) {
  const {
    user: imgSrc, title, text
  } = props;

  return (
    <li>
        <div>{imgSrc}</div>
        <span>{title}</span>
        <span>{text}</span>
    </li>
  );
}
export default WhyASqu;