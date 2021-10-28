import React, { useState } from 'react'
import { CustomCheckbox } from "react-custom-radio-checkbox";
import Popup from '../../../component/Popup';

const data = [
  {
    label: "Relavance",
    value: "FR"
  },
  {
    label: "New Listing Past",
    value: "CN"
  },
  {
    label: "Price Hight to Low",
    value: "NZ"
  },
  {
    label: "Price Low to High",
    value: "UA"
  }
];

const index = ({ shorts }) => {

  const checkboxChange = e => {
    console.log(e.target.checked);
  };
  return (
    <Popup className={shorts}>
      {data.map(item => (
        <CustomCheckbox label={item.label} onChange={checkboxChange} />
      ))}
    </Popup>
  )
}

export default index