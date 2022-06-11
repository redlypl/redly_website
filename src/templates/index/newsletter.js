import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
//import axios from "axios"

import {
  NewsletterWrapper,
  HeaderWrapper,
  NewsletterBody,
  SignSide,
  ImageDecoSide,
  ImageDecorationNewsletter,
  SignHeader,
  InputSign,
  FormWrapper,
  AcceptParagraph,
  SubmitButton,
  InputSubmitWrapper,
  LinkTo,
  ErrorMessage,
  SuccessMessageWrapper,
  ContentParagraph,
  SuccessHeader,
  ContentSuccessParagaph,
  IconSuccessWrapper,
  SuccessIcon,

} from "../../styles/templates/index/newsletter.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"
import AppleEmojis from "../../components/apple-emojis/apple-emojis-custom1"

const Newsletter = () => {
  const [isSent, setIsSent] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Niepoprawny adres email').required('To pole jest wymagane')
    }),
    onSubmit: values => {
      // axios.post('domain.example', values)
      setIsSent(true)
    }
  })

  return (
    <NewsletterWrapper>
      <HeaderWrapper>
        <Header
          name="Zapisz się na nasz newsletter"
          emojiBase={EmojiData.openMailboxWithRaisedFlag}
        />
      </HeaderWrapper>
      <NewsletterBody>
        <SignSide>
        {!isSent ?
          <FormWrapper>
            <SignHeader>Newsy ze świata<br />marketingu i biznesu <AppleEmojis url={EmojiData.rolledUpNewspaper} /></SignHeader>
            <InputSubmitWrapper onSubmit={formik.handleSubmit}>
              <InputSign
                type="text"
                name="email"
                id="email"
                placeholder="Tutaj wpisz adres E-mail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <SubmitButton />
            </InputSubmitWrapper>
            {formik.touched.email && formik.errors.email ? (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            ) : null}
            <AcceptParagraph>Twoje dane będą przetwarzane przez Redly, zgodnie z <LinkTo to="/regulamin">Polityką prywatności i plików cookies</LinkTo>, w celu wysyłania Ci newslettera. Pamiętaj, że możesz zawsze zrezygnować z otrzymywania newslettera.</AcceptParagraph>
          </FormWrapper>
          :
          <SuccessMessageWrapper>
            <ContentParagraph>
              <SuccessHeader>Zostałeś pomyślnie zapisany na newsletter <AppleEmojis url={EmojiData.faceWithOpenMouth} /><AppleEmojis url={EmojiData.partyPopper} /></SuccessHeader>
              <ContentSuccessParagaph>Wszystko co musisz teraz zrobić to otworzyć wiadomość email i kliknąć w wysłany link aby potwierdzić udział w newsletterze.</ContentSuccessParagaph>
            </ContentParagraph>
            <IconSuccessWrapper>
              <SuccessIcon />
            </IconSuccessWrapper>
          </SuccessMessageWrapper>
        }
        </SignSide>
        <ImageDecoSide>
          <ImageDecorationNewsletter />
        </ImageDecoSide>
      </NewsletterBody>
    </NewsletterWrapper>
  )
}

export default Newsletter