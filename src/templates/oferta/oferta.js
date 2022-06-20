import React from "react"

import {
    OfertaWrapper,
    HeaderWrapper,
    OfertaBody,
    OfertaItem,
    ImageIcon,
    Title,
    Content,
    ReadMore,
} from "../../styles/templates/oferta/oferta.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"
import SocialMediaInset from "../../components/socialMediaInset/socialMediaInset"

import twojaFirma__svg from "../../images/ofertaIcons/twojaFirma.svg"
import twojProdukt__svg from "../../images/ofertaIcons/twojProdukt.svg"
import twojaStrona__svg from "../../images/ofertaIcons/twojaStrona.svg"
import twojeSocial__svg from "../../images/ofertaIcons/twojeSocial.svg"

const OfertaData = [
    {
        link: '/twoja-firma',
        iconPath: twojaFirma__svg,
        title: 'Twoja firma',
        content: 'Ważnym składnikiem dobrego marketingu jest posiadanie estetycznego logotypu, dobrze przemyślanego brandingu czy ładnej wizytówki. Z nami to nie problem, doskonale wiemy co cieszy oko potencjalnego klienta i jesteśmy w stanie spełnić każdy, nawet najbardziej odjechany pomysł! Jeśli jesteś zainteresowany odświeżeniem lub zainicjowaniem brandingu w swojej firmie z naszą pomocą to ta oferta jest najprawdopodobniej dla Ciebie…'
    },
    {
        link: '/twoj-produkt',
        iconPath: twojProdukt__svg,
        title: 'Twój produkt',
        content: 'Czy wiesz, że opakowanie oraz etykieta produktu ma realny wpływ na sprzedaż oraz postrzeganie marki? Tutaj przychodzimy z pomocą i oferujemy dobrej jakości oraz szyte na miarę projekty graficzne. Ponadto projektujemy woblery oraz danglery dla lepszej promocji Twojej marki. Jeśli jesteś zainteresowany lepszą promocją twojej marki oraz większym zainteresowaniem Twoim produktem ze strony klientów to ta oferta jest zdecydowanie dla Ciebie…'
    },
    {
        link: '/twoja-strona',
        iconPath: twojaStrona__svg,
        title: 'Twoja strona',
        content: 'Estetyczna strona internetowa oraz wydajny sklep internetowy to klucz do dobrego biznesu. Z naszą pomocą stworzysz wymarzoną stronę internetową oraz sklep internetowy szyty na miarę. Proponujemy strony internetowe, aplikacje internetowe, sklepy internetowe, strony internetowe wizytówki oraz wiele więcej. U nas możesz liczyć na wzorowy kontakt i dokładne zrealizowanie projektu według wcześniej ustalonych wytycznych…'
    },
    {
        link: '/twoje-social-media',
        iconPath: twojeSocial__svg,
        title: 'Twoje Social Media',
        content: 'Czym byłby dzisiejszy biznes bez mediów społecznościowych? Zapewne nie zastanawiałeś się nigdy nad tym. My tak i stwierdzamy, że nie byłoby to nic dobrego. Wykorzystując dzisiejsze media społecznościowe Twoja marka może zbudować bliższą relacje z potencjalnym klientem. Dzięki mediom społecznościowym klient ma dzisiaj lepszy kontakt z marką. Ponadto nie jest już to tak duży koszt jak kiedyś reklamy w telewizji czy w radiu…'
    },
]

const Oferta = () => {
    return (
        <OfertaWrapper>
            <HeaderWrapper>
                <Header
                    name="Nasza oferta"
                    emojiBase={EmojiData.hammerAndWrench}
                />
            </HeaderWrapper>
            <OfertaBody>
                {OfertaData.map((item) => {
                    return (
                        <OfertaItem to={item.link}>
                            <ImageIcon image={item.iconPath}/>
                            <Title under={item.title}>{item.title}</Title>
                            <Content>{item.content}</Content>
                            <ReadMore>dowiedz się więcej</ReadMore>
                        </OfertaItem>
                    )
                })}
            </OfertaBody>
            <SocialMediaInset />
        </OfertaWrapper>
    )
}

export default Oferta