import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { theme } from "../../styles/theme"

const Paragraph = styled.p`
    margin: 0;
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
    padding: 15px 0;
    width: 80%;

    @media (max-width: ${ theme.breakpoint.largeDesktop }) {
        width: 100%;
    }
    @media (max-width: ${ theme.breakpoint.desktop }) {
        width: 80%;
        font-size: 25px;
        line-height: 35px;
    }
    @media (max-width: ${ theme.breakpoint.laptop }) {
        width: 100%;
    }
    @media (max-width: ${ theme.breakpoint.tablet }) {
        font-size: 20px;
        line-height: 30px;
    }
`
const LinkB = styled(Link)`
    text-decoration: underline;
    color: ${ theme.color.black };
    font-weight: 700;
    position: relative;

    :hover {
        background-color: ${ theme.color.darkGray };
        color: ${ theme.color.white };
    }
`
const B = styled.b`
    font-weight: 700;
`

export const ContactData = {
    index: <Paragraph>Zainteresowany <B>współpracą</B>? Zapraszamy do <B>kontaktu</B> lub przejrzenia świadczonych przez nas <LinkB to="/oferta">usług</LinkB>.</Paragraph>,
    oferta: <Paragraph><B>Nie znalazłeś</B> oczekiwanej oferty? Zapytaj o <LinkB to="/oferta">indywidualną usługę</LinkB>. Jesteśmy otwarci na <B>nowe wyzwania</B>.</Paragraph>,
    realizacje: <Paragraph>Zainteresowany <B>współpracą</B>? Zapraszamy do <B>kontaktu</B> lub przejrzenia świadczonych przez nas <LinkB to="/oferta">usług</LinkB>.</Paragraph>,
    blog: <Paragraph>Zainteresowany <B>współpracą</B>? Zapraszamy do <B>kontaktu</B> lub przejrzenia świadczonych przez nas <LinkB to="/oferta">usług</LinkB>.</Paragraph>,
    onas: <Paragraph>Zainteresowany <B>współpracą</B>? Zapraszamy do <B>kontaktu</B> lub przejrzenia świadczonych przez nas <LinkB to="/oferta">usług</LinkB>.</Paragraph>,
    kontakt: <Paragraph>Zainteresowany <B>współpracą</B>? Zapraszamy do <B>kontaktu</B> lub przejrzenia świadczonych przez nas <LinkB to="/oferta">usług</LinkB>.</Paragraph>,
    notfound: <Paragraph>Nie znalazłeś tego czego szukałeś? Nic straconego, <B>skontaktuj się</B> z nami lub przejrzyj <LinkB to="/oferta">nasze oferty</LinkB>.</Paragraph>,
    realizationsArticle: <Paragraph>Zainteresowany <B>współpracą</B>? Zapraszamy do <B>kontaktu</B> lub przejrzenia świadczonych przez nas <LinkB to="/oferta">usług</LinkB>.</Paragraph>
}