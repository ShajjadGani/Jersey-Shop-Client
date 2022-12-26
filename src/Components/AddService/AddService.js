import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddService = () => {
  const nameRef = useRef()
  const priceRef = useRef()
  const sizeRef = useRef()
  const imgRef = useRef()

  const handleAddService = (e) => {
    const name = nameRef.current.value
    const price = priceRef.current.value
    const size = sizeRef.current.value
    const img = imgRef.current.value

    const newService = { name, price, size, img }

    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Data is Successfully added in database')
        }
      })

    e.preventDefault()
  }

  return (
    <div>
      <Form onSubmit={handleAddService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Team Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Service Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Jersey Price</Form.Label>
          <Form.Control
            ref={priceRef}
            type="text"
            placeholder="Enter Service Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Jersey size</Form.Label>
          <Form.Control
            ref={sizeRef}
            type="text"
            placeholder="Enter Jersey size"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Jersey Image Link</Form.Label>
          <Form.Control
            ref={imgRef}
            type="text"
            placeholder="Enter Jersey Image Link"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddService
