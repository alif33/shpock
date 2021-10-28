import React from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import Popup from '../../../component/Popup';
const index = ({ price, setPrice }) => {
  return (
    <Popup className={price}>
      <div>
        <Form>
          <div className="d-flex">

            <FormGroup className='me-2'>
              <Label for="exampleNumber">From</Label>
              <Input
                type="number"
                name="number"
                id="exampleNumber"
                placeholder="0"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleNumber">To</Label>
              <Input
                type="number"
                name="number"
                id="exampleNumber"
                placeholder="NO Limit"
              />
            </FormGroup>
          </div>
          <div className='btn-group border-top'>
            <Button className='cancel' onClick={() => setPrice(!price)}>
              Cancel
            </Button>
            <Button className='apply'>Apply</Button>
          </div>
        </Form>
      </div>
    </Popup>
  )
}

export default index
