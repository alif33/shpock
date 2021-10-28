import React, { useState } from 'react';
import {
  Col,
  Container,
  Form,
  Row,
  Label,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
} from 'reactstrap';
import ModalRight from '../../component/ModalRight';
import Category from './Category';

const Sells = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className='sells pt-4' style={{ background: '#F7F8F7' }}>
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <h5>Sell an item</h5>
            <Form>
              <div className='imageinputarea divider'>
                <label for='images' class='Label'>
                  Add photos
                </label>
                <div className='ImageDropzone'>
                  <div className='DropzoneArea'>
                    <span size='48' className='IconContainer'>
                      <span
                        size='48'
                        aria-hidden='true'
                        role='img'
                        className='IconViewport'
                      >
                        <svg
                          viewBox='0 0 48 48'
                          className='SVG__IconSVG-sc-741qml-0 jmSzln'
                        >
                          <g
                            fill='none'
                            fill-rule='evenodd'
                            transform='translate(0 4)'
                          >
                            <path
                              stroke='currentColor'
                              stroke-width='1.5'
                              d='M38.328 31.434c.658 0 1.262-.348 1.596-.923a1.818 1.818 0 0 0 .061-1.761L29.211 7.784a1.84 1.84 0 0 0-1.473-1.025c-.635-.062-1.258.212-1.607.669l-7.255 11.529-.662-.779-4.814-5.663a1.836 1.836 0 0 0-1.543-.585c-.58.06-1.096.39-1.394.892L.995 28.696a1.815 1.815 0 0 0 .003 1.825c.326.565.932.913 1.588.913h35.742z'
                            ></path>
                            <circle
                              cx='5.5'
                              cy='3.5'
                              r='2.75'
                              stroke='currentColor'
                              stroke-width='1.5'
                            ></circle>
                            <path
                              fill='#FFF'
                              fill-rule='nonzero'
                              stroke='currentColor'
                              stroke-width='1.5'
                              d='M36.5 17.75c-5.936 0-10.75 4.814-10.75 10.75s4.814 10.75 10.75 10.75 10.75-4.814 10.75-10.75-4.814-10.75-10.75-10.75z'
                            ></path>
                            <path
                              fill='currentColor'
                              d='M37 28h4.5a.5.5 0 1 1 0 1H37v4.5a.5.5 0 1 1-1 0V29h-4.5a.5.5 0 1 1 0-1H36v-4.5a.5.5 0 1 1 1 0V28z'
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </span>
                  </div>
                  <input
                    type='file'
                    id='images'
                    required=''
                    multiple=''
                    // accept='image/png, image/jpeg'
                    // data-testid='imageDropzoneInput'
                    className='StyledInput'
                  />
                </div>
              </div>
              <div className='divider'>
                <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                  <Label for='exampleEmail'>Title</Label>
                  <Input
                    type='text'
                    name='title'
                    placeholder='What do you want to sell?'
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='exampleText'>Description </Label>
                  <Input type='textarea' name='text' id='exampleText' />
                </FormGroup>
                <Row>
                  <Col md={2}>
                    <FormGroup>
                      <Label for='exampleSelect'>Price</Label>
                      <Input type='select' name='select' id='exampleSelect'>
                        <option>EUR</option>
                        <option>EUR</option>
                        <option>EUR</option>
                        <option>EUR</option>
                        <option>EUR</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={10}>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                      <Label for='#'></Label>
                      <Input type='number' name='price' placeholder='' />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <div className='divider category-box m-0'>
                <Label for="exampleSelect">Your product will be listed here</Label>
                <div className='select d-flex align-items-center justify-content-between border p-2 w-50' onClick={()=> setModal(!modal)}>
                  Choose a category
                  <svg style={{height:'16px',width:'16px'}} viewBox="0 0 16 16" class="SVG__IconSVG-sc-741qml-0 kHWUOM"><path d="M4,4L12,4L8,8Z" fill="currentColor" stroke="currentColor" stroke-width="1px" strokeLinecap="butt"></path></svg>
                </div>
                 <ModalRight modal={modal} setModal={setModal}>
                   <Category />
                  </ModalRight>
              </div>
              <div className='divider search-box m-0'>
                <Label for='exampleEmail'>
                  Your product will be listed here
                </Label>
                <InputGroup
                  size='lg'
                  className='mx-auto drop-shadow border overflow-hidden d-flex align-items-center'
                >
                  <Input
                    type='search'
                    placeholder='Enter your street and house numbers'
                  />
                  <InputGroupAddon addonType='append' className='bg-white'>
                    <InputGroupText className=' border-0 bg-transparent border-start'>
                      <Button
                        color='secondary'
                        type='submit'
                        className='p-0 btn-icon btn-circle drop-shadow  bg-transparent text-dark border-0'
                      >
                        <svg
                          viewBox='0 0 24 24'
                          class='SVG__IconSVG-sc-741qml-0 jmSzln'
                        >
                          <path
                            d='M17.751 18.392l4.05 4.355a.752.752 0 0 1-.028 1.05.719.719 0 0 1-1.03-.029l-4.111-4.422a10.306 10.306 0 0 1-6.147 2.027C4.695 21.373 0 16.59 0 10.687S4.694 0 10.485 0c5.791 0 10.486 4.785 10.486 10.687 0 3.027-1.235 5.76-3.22 7.705zm-7.266 1.497c4.987 0 9.03-4.12 9.03-9.202 0-5.083-4.043-9.203-9.03-9.203-4.986 0-9.029 4.12-9.029 9.203 0 5.082 4.043 9.202 9.03 9.202z'
                            fill='currentColor'
                            fill-rule='nonzero'
                          ></path>
                        </svg>
                      </Button>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                <span className='smalltext'>
                  Only the approximate location will be shown publicly.
                </span>
              </div>
              <Button className='sell-btn'>Sell now</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Sells;
