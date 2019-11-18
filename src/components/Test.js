import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form, Input } from 'reactstrap';

const Test = ({testProp}) => {

    const [firstName, setFirstName] = useState('')
    //const [lastName, setLastname] = useState('')
    //const [city, setCity] = useState('')
    //const [state, setState] = useState('')

    const submit = (e) => {
        e.preventDefault()
        console.log(firstName)
    }
    return (
        <Container>
            <Form
                id="form"
                >
                    <Row>
                        {testProp}
                        <Col>
                            <Input name="firstName" onChange={(e) => setFirstName(e.target.value)}> Hello 
                            </Input>
                        </Col>
                        <Col>
                            <Input name="lastName"> Hello
                            </Input>
                        </Col>
                        <Col>
                            <Input name="city"> Hello
                            </Input>
                        </Col>
                        <Col>
                            <Input name="state"> Hello
                            </Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type="submit" onClick={submit}>
                                Button
                            </Button>
                        </Col>
                    </Row>
                </Form>
        </Container>
    )
}

export default Test;