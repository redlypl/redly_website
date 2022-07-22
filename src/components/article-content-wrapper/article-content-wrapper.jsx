import React from "react"
import FbImageLibrary from "react-fb-image-grid"

import {
    ContentWrapper,
    WideBlock,
    Col,
    ShortWrapper,
    ShortBlock,
    //content
    ColWrapperPosition,
    HeaderSection,
    ChannelsServicesSection,
    DescriptionSection,
    MainThumbnailImage,
    RightColumnWrapper,
    ClientLogo,
    CreatedAtParagraph,
    ListIcon,
    ListDot,
    AboutClientWarpper,
    AboutClientWarpperAbsolute,
    PhotoBanner,
    ClientOpinionWrapper,
    OpinionWrapper,
    Quote,

} from "./article-content-wrapper.style"

import { SocialMediaIcon } from "../../global/socialMediaData"

const ArticleContentWrapper = (props) => {

    let galleryImageArray = props.contentGraph.efekty.map(function (obj) {return obj.resize.src})

    return (
        <ContentWrapper>
            <WideBlock>
                <Col isWantMoreSpace id="color__gray">
                    <ColWrapperPosition>
                        <HeaderSection>
                            <h1>{props.contentGraph.nazwaKlienta}</h1>
                            <h2>{props.contentGraph.kategoriaRealizacji}</h2>
                        </HeaderSection>
                        <ChannelsServicesSection>
                            <h3>Kanały: </h3>
                            <div style={{display: 'flex',flexWrap: 'wrap', alignItems: 'center', margin: '10px 0 20px 0'}}>
                                {props.contentGraph.kanaly.map((item) => {

                                    let mapingIcons = ''

                                    if (item === 'Facebook') {
                                        mapingIcons = SocialMediaIcon.facebook
                                    } else if (item === 'Instagram') {
                                        mapingIcons = SocialMediaIcon.instagram
                                    } else if (item === 'Twitter') {
                                        mapingIcons = SocialMediaIcon.twitter
                                    } else if (item === 'Youtube') {
                                        mapingIcons = SocialMediaIcon.youtube
                                    } else if (item === 'LinkedIn') {
                                        mapingIcons = SocialMediaIcon.linkedin
                                    } else if (item === 'Tiktok') {
                                        mapingIcons = SocialMediaIcon.tiktok
                                    } else {
                                        mapingIcons = ''
                                    }

                                    return (
                                        <div style={{display: 'flex', alignItems: 'center', marginRight: '25px'}}>
                                            <ListIcon icon={mapingIcons} />
                                            <p style={{fontWeight: '500', margin: '0'}}> - {item}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <h3>Usługi: </h3>
                            <div style={{display: 'flex',flexDirection: 'column', flexWrap: 'wrap', margin: '10px 0 20px 0'}}>
                                {props.contentGraph.uslugi.map((item) => {
                                    return (
                                        <div style={{display: 'flex', gap: '5px', alignItems: 'center', marginBottom: '5px'}}>
                                            <ListDot />
                                            <p style={{fontWeight: '500', margin: '0'}}>{item}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </ChannelsServicesSection>
                        <DescriptionSection>
                            <p>{props.contentGraph.opis.opis}</p>
                        </DescriptionSection>
                    </ColWrapperPosition>
                </Col>
                <Col isSecond id="color__gray">
                    <RightColumnWrapper>
                        <ClientLogo />
                        <CreatedAtParagraph>{props.contentGraph.createdAt}</CreatedAtParagraph>
                        <MainThumbnailImage imageBanner={props.contentGraph.banerProjektu.resize.src} />
                    </RightColumnWrapper>
                </Col>
            </WideBlock>
            <ShortWrapper>
                <ShortBlock isWantMoreSpace id="color__white">
                    <AboutClientWarpper>
                        <h1>Kilka słów o kliencie</h1>
                        <p>{props.contentGraph.kilkaSlow.kilkaSlow}</p>
                    </AboutClientWarpper>
                </ShortBlock>
                <ShortBlock>
                    <PhotoBanner image={props.contentGraph.banerKlient.resize.src}/>
                </ShortBlock>
                <ShortBlock>
                    <PhotoBanner image={props.contentGraph.banerWstep.resize.src}/>
                </ShortBlock>
                <ShortBlock id="color__darkGray">
                    <AboutClientWarpper>
                        <h1>Wyzwanie</h1>
                        <p>{props.contentGraph.wyzwanie.wyzwanie}</p>
                    </AboutClientWarpper>
                </ShortBlock>
                <ShortBlock id="color__lightBlack">
                    <AboutClientWarpper isWhiteFont>
                        <h1>Rozwiązanie</h1>
                        <p>{props.contentGraph.rozwizanie.rozwizanie}</p>
                    </AboutClientWarpper>
                </ShortBlock>
                <ShortBlock>
                    <AboutClientWarpperAbsolute isWhiteFont>
                        <h1>Efekty</h1>
                    </AboutClientWarpperAbsolute>
                    <FbImageLibrary
                        images={galleryImageArray}
                        countFrom={4}
                        renderOverlay={() => ''}
                    />
                </ShortBlock>
            </ShortWrapper>
            <WideBlock isBottom>
                <ClientOpinionWrapper id="color__darkerGray">
                    <h1>Opinia klienta</h1>
                    <OpinionWrapper>
                        <div>
                            <Quote />
                        </div>
                        <p>{props.contentGraph.opinia.opinia}</p>
                        <div style={{color: 'white', display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                                <p style={{margin: '0',}}>{props.contentGraph.imieNazwisko}</p>
                                <span style={{margin: '0'}}>{props.contentGraph.stanowisko}, {props.contentGraph.nazwaKlienta}</span>
                            </div>
                            <Quote isRotated />
                        </div>
                    </OpinionWrapper>
                </ClientOpinionWrapper>
            </WideBlock>
        </ContentWrapper>
    )
}

export default ArticleContentWrapper