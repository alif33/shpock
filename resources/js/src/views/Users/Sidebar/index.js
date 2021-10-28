import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ModalRight from '../../../component/ModalRight';
const Sidebar = () => {
  const [modal3, setModal3] = useState(false);
  const [links, setLinks] = useState(false);
  return (
    <div className='sidebar text-center me-3'>
      <div className='profile-image'>
        <img
          src='data:image/jpeg;base64,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'
          alt=''
        />
      </div>
      <div className='reviews'>
        <Link to='Profile/reviews'>
          <span>(0)</span>
        </Link>
      </div>
      <h3>GGDelectronics and Communications LTD</h3>

      <div className='share-edit'>
        <div>
          <Button className='edit' onClick={() => setModal3(!modal3)}>
            following
          </Button>
        </div>
        <div className='social-links'>
          <Button className='share' onClick={() => setLinks(!links)}>
            Share
          </Button>
        </div>
      </div>
      <ul className={`links-item ${links && 'open-links'}`}>
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
      <div className='informations'>
        <h6>CB RADIO,CB ANTENNAS,HAM ANTENNAS,ACCESSORIES,</h6>
        <ul>
          <li>
            <svg viewBox='0 0 24 24' class='SVG__IconSVG-sc-741qml-0 jmSzln'>
              <path
                fill='currentColor'
                d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z'
              ></path>
            </svg>
            giovanniiaconisi57@gmail.com
          </li>
          <li>
            <svg viewBox='0 0 24 24' class='SVG__IconSVG-sc-741qml-0 jmSzln'>
              <path
                fill='currentColor'
                d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'
              ></path>
            </svg>
            +4487445676
          </li>
          <li>
            <svg viewBox='0 0 24 24' class='SVG__IconSVG-sc-741qml-0 jmSzln'>
              <path
                fill='currentColor'
                d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'
              ></path>
            </svg>
            Shop website
          </li>
          <li>
            <svg viewBox='0 0 24 24' class='SVG__IconSVG-sc-741qml-0 jmSzln'>
              <path
                fill='currentColor'
                d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
              ></path>
            </svg>
            Address, Falkirk, FK2 7XE, falkirk, GB
          </li>
        </ul>
      </div>
      <div className='terms'>This shop’s Terms & Conditions</div>
    </div>
  );
};

export default Sidebar;
