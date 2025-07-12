import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

function MyValidationForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustomUsername">
                {/* <Form.Label>Username</Form.Label> */}
                <InputGroup hasValidation>
                    <InputGroup.Text id="usernamePrepend">username @</InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="usernamePrepend"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                        Looks good!
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>

            <Form.Group controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="passwordPrepend">password</InputGroup.Text>
                        <Form.Control type="text"
                            placeholder="City"
                            aria-describedby='passwordPrepend'
                            required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    
                </InputGroup>
            </Form.Group>

            <Button type="submit">Submit form</Button>
        </Form>
    );
}

export default MyValidationForm;