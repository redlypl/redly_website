import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

import {
    ContactFormWrapper,
    InputSubmitWrapper,
    InputSign,
    TextArea,
    AcceptParagraph,
    LinkTo,
    ButtonPosition,
    SubmitButton,
    ErrorMessage,
    SuccessMessageWrapper,
    ContentParagraph,
    SuccessHeader,
    ContentSuccessParagaph,
    IconSuccessWrapper,
    SuccessIcon,


} from "./contactForm.style"

import AppleEmojis from "../apple-emojis/apple-emojis-custom1"
import { EmojiData } from "../apple-emojis/emojiData"

const ContactForm = () => {
    const [isSent, setIsSent] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Niepoprawny adres email').required('To pole jest wymagane'),
            message: Yup.string().required('To pole jest wymagane')
        }),
        onSubmit: values => {
            // axios.post('domain.example', values)
            setIsSent(true)
        }
    })

    return (
        <ContactFormWrapper>
            {!isSent ?
                <InputSubmitWrapper onSubmit={formik.handleSubmit}>
                    <InputSign
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Imię i nazwisko"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    <InputSign
                        type="text"
                        name="email"
                        id="email"
                        placeholder="E-mail*"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <ErrorMessage>{formik.errors.email}</ErrorMessage>
                    ) : null}
                    <TextArea
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Wiadomość*"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <ErrorMessage>{formik.errors.message}</ErrorMessage>
                    ) : null}
                    <AcceptParagraph>Twoje dane będą przetwarzane przez Redly, zgodnie z <LinkTo to="/regulamin">Polityką prywatności i plików cookies</LinkTo>, w celu obsługi formularza kontaktowego.</AcceptParagraph>
                    <ButtonPosition>
                        <SubmitButton>Wyślij</SubmitButton>
                    </ButtonPosition>
                </InputSubmitWrapper>
                :
                <SuccessMessageWrapper>
                    <ContentParagraph>
                        <SuccessHeader>Poszło! <AppleEmojis url={EmojiData.faceWithOpenMouth} /><AppleEmojis url={EmojiData.partyPopper} /></SuccessHeader>
                        <ContentSuccessParagaph>Odpowiemy najszybciej jak to możliwe.</ContentSuccessParagaph>
                    </ContentParagraph>
                    <IconSuccessWrapper>
                        <SuccessIcon />
                    </IconSuccessWrapper>
                </SuccessMessageWrapper>
            }
        </ContactFormWrapper>
    )
}

export default ContactForm