import React from "react"

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
    ClientLogo,
    CreatedAtParagraph,
    ListIcon,
    ListDot,
    AboutClientWarpper,
    PhotoBanner,
    ClientOpinionWrapper,
    OpinionWrapper,
    Quote,

} from "./article-content-wrapper.style"

import { SocialMediaIcon } from "../../global/socialMediaData"

import wroconsultDemoBanner from "../../images/demo/banner2.png"
import wroconsultDemoBanner2 from "../../images/demo/banner3.png"

const ArticleContentWrapper = () => {
    return (
        <ContentWrapper>
            <WideBlock>
                <Col isWantMoreSpace id="color__gray">
                    <ColWrapperPosition>
                        <HeaderSection>
                            <h1>Wroconsult</h1>
                            <h2>Strona internetowa</h2>
                        </HeaderSection>
                        <ChannelsServicesSection>
                            <h3>Kanały: </h3>
                            <div style={{display: 'flex',flexWrap: 'wrap', alignItems: 'center', margin: '10px 0 20px 0'}}>
                                <div style={{display: 'flex', alignItems: 'center', marginRight: '25px'}}>
                                    <ListIcon icon={SocialMediaIcon.facebook} />
                                    <p style={{fontWeight: '500', margin: '0'}}> - Facebook</p>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center', marginRight: '25px'}}>
                                    <ListIcon icon={SocialMediaIcon.instagram} />
                                    <p style={{fontWeight: '500', margin: '0'}}> - Instagram</p>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center', marginRight: '25px'}}>
                                    <ListIcon icon={SocialMediaIcon.github} />
                                    <p style={{fontWeight: '500', margin: '0'}}> - Github</p>
                                </div>
                            </div>
                            <h3>Usługi: </h3>
                            <div style={{display: 'flex',flexDirection: 'column', flexWrap: 'wrap', margin: '10px 0 20px 0'}}>
                                <div style={{display: 'flex', gap: '5px', alignItems: 'center', marginBottom: '5px'}}>
                                    <ListDot />
                                    <p style={{fontWeight: '500', margin: '0'}}>Projekt i wdrożenie strony internetowej</p>
                                </div>
                                <div style={{display: 'flex', gap: '5px', alignItems: 'center', marginBottom: '5px'}}>
                                    <ListDot />
                                    <p style={{fontWeight: '500', margin: '0'}}>Bieżąca obsługa mediów społecznościowych</p>
                                </div>
                            </div>
                        </ChannelsServicesSection>
                        <DescriptionSection>
                            <p>Wroconsult chciał czegoś nowego. Czegoś co odświeży postrzeganie firmy. Padło na stronę internetową i zaaktualizowanie mediów społecznościowych.</p>
                        </DescriptionSection>
                    </ColWrapperPosition>
                </Col>
                <Col isSecond id="color__gray">
                    <MainThumbnailImage>
                        <ClientLogo />
                        <CreatedAtParagraph>24.06.2022</CreatedAtParagraph>
                    </MainThumbnailImage>
                </Col>
            </WideBlock>
            <ShortWrapper>
                <ShortBlock isWantMoreSpace id="color__white">
                    <AboutClientWarpper>
                        <h1>Kilka słów o kliencie</h1>
                        <p>Wroconsult to Wrocławska grupa doradcza z 20-letnim doświadczeniem podejmująca tematy w zakresie zdrowia, energetyki, ochrony środowiska, turystyki i rekreacji tworząc koncepcje, plany, analizy finansowe, plany restrukturyzacji i strategie rozwoju oraz zajmująca się realizowaniem badań, ekspertyz i zarządzaniem projektami. Pomoc Wroconsult’u możemy zauważyć w sektorze publicznym jak i prywatnym.</p>
                    </AboutClientWarpper>
                </ShortBlock>
                <ShortBlock>
                    <PhotoBanner image={wroconsultDemoBanner}/>
                </ShortBlock>
                <ShortBlock>
                    <PhotoBanner image={wroconsultDemoBanner2}/>
                </ShortBlock>
                <ShortBlock id="color__darkGray">
                    <AboutClientWarpper>
                        <h1>Wyzwanie</h1>
                        <p>Głównym wyzwaniem dla nas było zaprojektowanie i wdrożenie przejrzystej strony internetowej która w swoim założeniu miała przyciągać do siebie potencjalnych klientów i jednocześnie być minimalistyczną wizytówką firmy.<br />Ponadto na okres współpracy profil facebook'owy miał zostać odświeżony i obdarzony nową jakością publikowanych postów.</p>
                    </AboutClientWarpper>
                </ShortBlock>
                <ShortBlock id="color__lightBlack">
                    <AboutClientWarpper isWhiteFont>
                        <h1>Rozwiązanie</h1>
                        <p>Do tematu obie strony podeszły profesjonalnie. Dzięki temu udało się wdrożyć profesjonalną wizytówkę dla całej firmy z aktualnościami i udokumentowanymi osiągnięciami. Firma dodatkowo przeszła lekkie odświeżenie brandu oraz uzyskała większą aktywność na stronie facebook'owej.</p>
                    </AboutClientWarpper>
                </ShortBlock>
                <ShortBlock style={{backgroundColor: 'red'}}>
                    gallery
                </ShortBlock>
            </ShortWrapper>
            <WideBlock isBottom>
                <ClientOpinionWrapper id="color__darkerGray">
                    <h1>Opinia klienta</h1>
                    <OpinionWrapper>
                        <div>
                            <Quote />
                        </div>
                        <p>Do tematu Redly podeszło profesjonalnie. Dzięki temu udało się wdrożyć profesjonalną wizytówkę dla całej firmy z aktualnościami i udokumentowanymi osiągnięciami z czego jestem bardzo zadowolony.</p>
                        <div style={{color: 'white', display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                                <p style={{margin: '0',}}>Krzysztof Raczkowski</p>
                                <span style={{margin: '0'}}>CEO, Wroconsult</span>
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