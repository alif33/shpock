import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ModalRight from '../../../component/ModalRight';
const Sidebar = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [links, setLinks] = useState(false);
  return (
    <div className='sidebar text-center me-3'>
      <div className='profile-image'>
        <img
          src='https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'
          alt=''
        />
      </div>
      <div className='reviews'>
        <Link to='Profile/reviews'>
          <span>(0)</span>
        </Link>
      </div>
      <h3>Ahmed S.</h3>
      <div className='information'>
        <ul>
          <li>
            <h6>0</h6>
            <p>Bought</p>
          </li>
          <li>
            <h6>0</h6>
            <p>Sold</p>
          </li>
          <li onClick={() => setModal1(!modal1)} className='followers'>
            <h6>0</h6>
            <p>Followers</p>
            <ModalRight modal={modal1} setModal={setModal1}>
              <h1>Followers</h1>
              <div className='followers-modal'>
                <div className='modal-contents'>
                  <div className='items'>
                    <div>
                      <img
                        src='https://yams.secondhandapp.at/api/v1/shpock-production/images/5fc511656825a00d2c9940f1/?rule=aw100ah100q75jpeg'
                        alt=''
                      />
                    </div>
                    <h3>
                      <Link>Child.org Charity Shop</Link>{' '}
                    </h3>
                    <Button>Followers</Button>
                  </div>
                </div>
              </div>
            </ModalRight>
          </li>
          <li onClick={() => setModal2(!modal2)} className='following'>
            <h6>0</h6>
            <p>Following</p>
            <ModalRight modal={modal2} setModal={setModal2}>
              <h1>Following</h1>
              <div className='following-modal'>
                <div className='modal-contents'>
                  <div className='items'>
                    <div>
                      <img
                        src='https://yams.secondhandapp.at/api/v1/shpock-production/images/5fc511656825a00d2c9940f1/?rule=aw100ah100q75jpeg'
                        alt=''
                      />
                    </div>
                    <h3>
                      <Link>Child.org Charity Shop</Link>{' '}
                    </h3>
                    <Button>Following</Button>
                  </div>
                </div>
              </div>
            </ModalRight>
          </li>
        </ul>
      </div>
      <div className='share-edit'>
        <div className='social-links'>
          <Button className='share' onClick={() => setLinks(!links)}>
            Share
          </Button>
        </div>
        <div>
          <Button className='edit' onClick={() => setModal3(!modal3)}>
            Edit Profile
          </Button>
          <ModalRight modal={modal3} setModal={setModal3}>
            <h1>Edit Profile</h1>
            <div className='edit-profile-modal'>
              <Form>
                <FormGroup className='user-form'>
                  <Label for='exampleEmail'>Username</Label>
                  <Input type='name' name='name' placeholder='add a Username' />
                </FormGroup>
                <FormGroup>
                  <Label for='exampleText'>Bio</Label>
                  <Input
                    type='textarea'
                    name='text'
                    id='exampleText'
                    placeholder='add a description about your area'
                  />
                </FormGroup>

                <Button>Save</Button>
              </Form>
            </div>
          </ModalRight>
        </div>
      </div>
      <ul className={`links-item ${links && 'open-links'}`} >
        <li>
          <svg viewBox='0 0 32 32' class='SVG-wlnxuy-0 bIwcGB'>
            <path
              d='M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zM6 26l1.483-5.392a10.35 10.35 0 0 1-1.395-5.203C6.09 9.668 10.78 5 16.544 5c2.774 0 5.435 1.098 7.396 3.051A10.383 10.383 0 0 1 27 15.414c-.002 5.737-4.693 10.406-10.456 10.406h-.004c-1.746 0-3.464-.436-4.997-1.267L6 26zm5.8-3.331l.317.188a8.71 8.71 0 0 0 4.423 1.205h.004c4.79 0 8.688-3.88 8.69-8.649a8.63 8.63 0 0 0-2.542-6.118 8.713 8.713 0 0 0-6.145-2.537c-4.793 0-8.692 3.88-8.694 8.648a8.597 8.597 0 0 0 1.329 4.603l.207.327-.879 3.192 3.29-.859zm10.012-4.78c.065.107.065.628-.152 1.235-.218.608-1.262 1.162-1.764 1.237-.45.067-1.02.095-1.646-.103a15.048 15.048 0 0 1-1.489-.548c-2.62-1.126-4.332-3.752-4.463-3.926-.13-.174-1.067-1.41-1.067-2.69s.675-1.909.914-2.17a.962.962 0 0 1 .697-.324c.174 0 .349.001.5.009.161.008.377-.06.589.446.217.52.74 1.8.805 1.93.065.13.109.283.022.456-.087.174-.131.282-.261.434-.13.152-.275.34-.392.456-.131.13-.267.27-.115.53.153.26.677 1.112 1.454 1.801.998.887 1.84 1.161 2.1 1.291.262.13.414.109.567-.065.152-.173.653-.759.827-1.02.174-.26.348-.216.588-.13.24.087 1.524.716 1.785.847.261.13.435.195.5.303z'
              fill='#25D366'
              fill-rule='nonzero'
            ></path>
          </svg>
        </li>
        <li>
          <svg viewBox='0 0 32 32' class='SVG-wlnxuy-0 bIwcGB'>
            <path
              d='M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.172-6v-8.656h2.812l.421-3.388h-3.233V11.8c0-.98.262-1.646 1.614-1.646H20.5V7.131A22.415 22.415 0 0 0 17.988 7c-2.485 0-4.186 1.574-4.186 4.465v2.492H11v3.387h2.802V26h3.37z'
              fill='#4267B2'
              fill-rule='nonzero'
            ></path>
          </svg>
        </li>
        <li>
          <svg viewBox='0 0 32 32' class='SVG-wlnxuy-0 bIwcGB'>
            <defs>
              <linearGradient x1='50%' y1='88.63%' x2='50%' y2='5.07%' id='a'>
                <stop stop-color='#006DFF' offset='0%'></stop>
                <stop stop-color='#00C6FF' offset='100%'></stop>
              </linearGradient>
            </defs>
            <path
              d='M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-26c-5.634 0-10 4.127-10 9.7 0 2.916 1.195 5.435 3.14 7.175.164.147.262.35.27.57l.055 1.779a.801.801 0 0 0 1.123.708l1.983-.875a.798.798 0 0 1 .534-.04c.911.25 1.883.384 2.895.384 5.634 0 10-4.127 10-9.7C26 10.126 21.634 6 16 6zm6.004 7.463l-2.938 4.66a1.501 1.501 0 0 1-2.169.4l-2.336-1.752a.6.6 0 0 0-.722.002l-3.155 2.394c-.42.32-.972-.185-.688-.632l2.938-4.66a1.501 1.501 0 0 1 2.169-.4l2.336 1.752a.6.6 0 0 0 .722-.002l3.155-2.394c.42-.32.972.185.688.632z'
              fill='url(#a)'
              fill-rule='nonzero'
            ></path>
          </svg>
        </li>
        <li>
          <svg viewBox='0 0 32 32' class='SVG-wlnxuy-0 bIwcGB'>
            <path
              d='M7.599 10h16.803c.082 0 .158.016.234.036L16.398 17.5c-.193.176-.602.176-.796 0l-8.238-7.464A.919.919 0 0 1 7.599 10zm-.897.678l6.104 5.524-6.104 5.12a.933.933 0 0 1-.035-.245V10.923c0-.085.014-.167.035-.245zm18.596 0c.021.079.035.16.035.245v10.154a.933.933 0 0 1-.035.245l-6.104-5.12 6.104-5.524zm-11.802 6.151l1.5 1.356c.57.516 1.438.516 2.007 0l1.501-1.356 6.125 5.135a.904.904 0 0 1-.228.036H7.6a.904.904 0 0 1-.228-.036l6.125-5.135zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z'
              fill='#486270'
              fill-rule='evenodd'
            ></path>
          </svg>
        </li>
        <li>
          <Button>
            <span>
              <svg viewBox='0 0 16 16' class='SVG-wlnxuy-0 bIwcGB'>
                <path
                  d='M7.18 5.478a.52.52 0 0 1-.727.111.52.52 0 0 1-.143-.72l2.649-3.783C9.864-.207 11.847-.332 13.38.742c1.533 1.074 2.095 2.979 1.19 4.272l-2.65 3.783c-.905 1.293-2.887 1.418-4.42.344a.52.52 0 0 1-.144-.72.52.52 0 0 1 .726-.112c1.085.76 2.411.676 2.969-.12L13.7 4.405c.558-.796.182-2.07-.903-2.83-1.085-.76-2.411-.677-2.969.12L7.18 5.477zm2.277 5.048a.52.52 0 0 1 .726-.112.52.52 0 0 1 .143.72l-2.649 3.783c-.905 1.293-2.888 1.418-4.421.344-1.533-1.074-2.095-2.979-1.19-4.272l2.65-3.783c.905-1.293 2.887-1.418 4.42-.344a.52.52 0 0 1 .144.72.52.52 0 0 1-.726.113c-1.085-.76-2.411-.677-2.969.12l-2.649 3.783c-.558.796-.182 2.071.903 2.83 1.085.76 2.411.677 2.969-.12l2.649-3.782z'
                  fill='currentColor'
                  fill-rule='evenodd'
                ></path>
              </svg>
            </span>
            Copy link
          </Button>
        </li>
      </ul>
      <p className='joined'>Joined August 2021</p>
    </div>
  );
};

export default Sidebar;
