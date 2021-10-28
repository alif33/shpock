import React, { useState } from 'react'
import MultilevelSidebar from 'react-multilevel-sidebar';
import 'react-multilevel-sidebar/src/Sidebar.css';
import { CustomCheckbox } from "react-custom-radio-checkbox";
import Popup from '../Popup';
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

  // {
  //   hideBorder: true,
  //   content: [
  //     {
  //       id: 3,
  //       name: <Link to="#">Jobs</Link>,
  //       icon: <i className="fa fa-chrome" />,
  //       children: [
  //         {
  //           content: [
  //             {
  //               id: 1,
  //               name: <Link to="/job">Job Listing Grid</Link>,
  //             },
  //             {
  //               id: 2,
  //               name: <Link to="/job/details">Job Single</Link>,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   hideBorder: true,
  //   content: [
  //     {
  //       id: 4,
  //       name: <Link to="#">Pages</Link>,
  //       icon: <i className="fa fa-chrome" />,
  //       children: [
  //         {
  //           content: [
  //             {
  //               id: 1,
  //               name: <Link to="/about">About Us</Link>,
  //             },
  //             {
  //               id: 2,
  //               name: <Link to="/company/details">Companies</Link>,
  //             },
  //             {
  //               id: 3,
  //               name: <Link to="/company">Company Single</Link>,
  //             },
  //             {
  //               id: 4,
  //               name: <Link to="/fff">Error Page</Link>,
  //             },
  //             {
  //               id: 5,
  //               name: <Link to="/signin">Login</Link>,
  //             },
  //             {
  //               id: 6,
  //               name: <Link to="/pricing">Pricing Table</Link>,
  //             },
  //             {
  //               id: 7,
  //               name: <Link to="signup">Sign Up</Link>,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },



];

const Category = ({ category }) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Popup className={category}>
      <div className='menubar'>
        <MultilevelSidebar
          open={open}
          options={options}
          wrapperClassName="header-menu-bar"
          onToggle={handleClick}
        />
      </div>
    </Popup>
  )
}

export default Category
