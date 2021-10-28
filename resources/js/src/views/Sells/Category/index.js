import React, { useState } from 'react'
import MultilevelSidebar from 'react-multilevel-sidebar';
import 'react-multilevel-sidebar/src/Sidebar.css';
import { CustomCheckbox } from "react-custom-radio-checkbox";
const checkboxChange = e => {
  console.log(e.target.checked);
};
const options = [
  {
    hideBorder: true,
    content: [
      {
        id: 1,
        name: 'Electronics',
        icon: <i className="fa fa-desktop" />,
        children: [
          {
            content: [
              {
                id: 2,
                name: <CustomCheckbox label='All Electronics' onChange={checkboxChange} />,
              },
              {
                id: 3,
                name: 'Mobile',
                children: [{
                  content: [
                    {
                      id: 4,
                      name: <CustomCheckbox label='samsung' onChange={checkboxChange} />,

                    },
                    {
                      id: 5,
                      name: <CustomCheckbox label='nokia' onChange={checkboxChange} />,

                    }
                  ]

                }]
              },
            ],
          },
        ],
      },
    ],
  },
  {
    hideBorder: true,
    content: [
      {
        id: 1,
        name: 'Fashion And Accessories',
        icon: <i className="fa fa-cart-plus" />,
        children: [
          {
            content: [
              {
                id: 2,
                name: <CustomCheckbox label='All Electronics' onChange={checkboxChange} />,
              },
              {
                id: 3,
                name: 'Mobile',
                children: [{
                  content: [
                    {
                      id: 4,
                      name: <CustomCheckbox label='samsung' onChange={checkboxChange} />,

                    },
                    {
                      id: 5,
                      name: <CustomCheckbox label='nokia' onChange={checkboxChange} />,

                    }
                  ]

                }]
              },
            ],
          },
        ],
      },
    ],
  },

];

const Category = ({ category }) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(false);
  };

  return (

    <div className='menubar category-modal'>
      <MultilevelSidebar
        open={open}
        options={options}
        wrapperClassName="header-menu-bar"
        onToggle={handleClick}
      />
    </div>

  )
}

export default Category
