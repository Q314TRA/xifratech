import React, { useState } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import useFormUrl from '../useFormUrl'
import { Row, Col } from '../../ui/wrapper'
import Form, { FormGroup, Input, Select, Textarea, Error } from '../../ui/form'
import Button from '../../ui/button'

const ConsultForm = ({ btnStyle }) => {
    const formUrl = useFormUrl();
    const { register, handleSubmit, errors, reset } = useForm({
        mode: "onBlur"
    });
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const onSubmit = (data, e) => {
        const form = e.target;
        setServerState({ submitting: true });


        axios({
            method: "post",
            url: "https://api.mailjet.com/v3.1/send",
            data: {
                "Messages": [
                    {
                        "From": {
                            "Email": "admin@aldebarant.com",
                            "Name": "XIFRATECH"
                        },
                        "To": [
                            {
                                "Email": "admin@aldebarant.com",
                                "Name": "aldebarant"
                            }
                        ],
                        "Subject": `XIFRATECH ${data.subject}`,
                        "TextPart": 'Concato web',
                        "HTMLPart": `<h3>Contacto</h3>, <br/> 
                    <p><strong>Email:<strong>${data.email}<p>
                    <p><strong>Name:<strong>${data.name}<p>
                    <p><strong>Mensaje:<strong>${data.subject}<p>
                    `,
                        "CustomID": "AppGettingStartedTest"
                    }
                ]
            },
            "headers": {
                "content-type": "application/json"
            },
            "auth": {
                username: '680487b3e6e8a0266c31aa2fab44510d',
                password: '77b928e2042912b3ad6d773b886bf7f9'
            }

        })
            .then(r => {
                handleServerResponse(true, "Gracias! Por contactarse con nostros.", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });


    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row gutters={{ lg: 20 }}>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="text"
                            name="consult_name"
                            id="consult_name"
                            placeholder="Nombre *"
                            bgcolor="white"
                            ref={register({ required: 'Nombre es requerido' })}
                        />
                        <Error>{errors.consult_name && errors.consult_name.message}</Error>
                    </FormGroup>
                </Col>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="email"
                            name="consult_email"
                            id="consult_email"
                            placeholder="Correo *"
                            bgcolor="white"
                            ref={register({
                                required: 'Correo es requerido',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address"
                                }
                            })}
                        />
                        <Error>{errors.consult_email && errors.consult_email.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="20px">
                        <Select name="consult_inquiry" id="consult_inquiry" bgcolor="white"
                            ref={register({ required: "Seleccione un asunto" })}
                        >
                            <option value="">Asunto</option>
                            <option value="Información servicios">Información servicios</option>
                            <option value="Solicitud de servicio">Solicitud de servicio</option>
                            <option value="Información de la empresa">Información de la empresa</option>
                            <option value="PQRS">PQRS</option>
                        </Select>
                        <Error>{errors.consult_inquiry && errors.consult_inquiry.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="30px">
                        <Textarea
                        bgcolor="white"
                            name="consult_message"
                            id="consult_message"
                            placeholder="Escribe aquí tu pregunta."
                            ref={register({
                                required: 'Mensaje es requerido',
                                maxLength: {
                                    value: 100,
                                    message: "Maximo 100 caracteres"
                                },
                                minLength: {
                                    value: 10,
                                    message: "Minimo 10 caracteres"
                                }
                            })}
                        ></Textarea>
                        <Error>{errors.consult_message && errors.consult_message.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Button type="submit" disabled={serverState.submitting} {...btnStyle}>Enviar</Button>
                    {serverState.status && (
                        <p className={`form-output ${!serverState.status.ok ? "errorMsg" : "success"}`}>
                            {serverState.status.msg}
                        </p>
                    )}
                </Col>
            </Row>
        </Form>
    )
}

ConsultForm.propTypes = {
    btnStyle: PropTypes.object
}

ConsultForm.defaultProps = {
    btnStyle: {
        hover: 2,
        pl: '54px',
        pr: '54px'
    }
}

export default ConsultForm;