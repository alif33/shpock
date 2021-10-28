import React, { useState}from 'react'
import { CustomCheckbox } from "react-custom-radio-checkbox";
import Popup from '../../../component/Popup';

const data = [
  {
    label: "Any time(0)",
    value: "FR"
  },
  {
    label: "Past 24hours(0)",
    value: "CN"
  },
  {
    label: "New Zealand",
    value: "NZ"
  },
  {
    label: "Ukraine",
    value: "UA"
  }
];

const index = ({date}) => {

  const checkboxChange = e => {
    console.log(e.target.checked);
  };
  return (
    <Popup className={date}>
      {data.map(item => (
        <CustomCheckbox label={item.label} onChange={checkboxChange} />
      ))}
    </Popup>
  )
}

export default index