import React from "react"

import {
    ONasWrapper,
    HeaderWrapper,
    RealizationsItemsWrapper,
    NormalTextBlockWrapper,
    ListWhatWeDoingWrapper,
    BreakLine,
    LogoPlacement,
    LogoSwapWrapper,
    ListWrapper,
} from "../../styles/templates/o-nas/o-nas.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"
import SocialMediaInset from "../../components/socialMediaInset/socialMediaInset"

const ONas = () => {
    return (
        <ONasWrapper>
            <HeaderWrapper>
                <Header
                    name="Poznajmy się"
                    emojiBase={EmojiData.handshake}
                />
            </HeaderWrapper>
            <RealizationsItemsWrapper>
                <NormalTextBlockWrapper>
                    <h1>Odpowiedzialni za powierzone zadania</h1>
                    <p>Wyróżnia nas profesjonalne i nowoczesne podejście do powierzonych zadań. Jesteśmy otwarci na nowe innowacyjne pomysły. Dzięki nam zrealizowanie nawet najbardziej wymagającego i innowacyjnego pomysłu w zakresie reklamy stanie się możliwe. Nasz zespół składa się głównie z młodych osób z ambicjami podboju branży reklamowej. </p>
                </NormalTextBlockWrapper>
                <NormalTextBlockWrapper>
                    <h1>Partner w zakresie consultingu</h1>
                    <LogoSwapWrapper>
                        <p>Dzięki współpracy z Wrocławską grupą doradczą działamy o krok profesjonalniej od innych agencji. My zajmujemy się pracą kreatywną i myśleniem koncepcyjnym a nasz partner wspiera nas w zakresie analityki, finansów oraz strategii biznesowej.</p>
                        <LogoPlacement />
                    </LogoSwapWrapper>
                </NormalTextBlockWrapper>
                <ListWhatWeDoingWrapper>
                    <h1>Czym się zajmujemy</h1>
                    <ListWrapper>
                        <div>Tworzeniem identyfikacji wizualnej i materiałów reklamowych dla firm</div>
                        <BreakLine />
                        <div>Tworzeniem wielu typów stron internetowych dla różnego przeznaczenia</div>
                        <BreakLine />
                        <div>Tworzeniem projektów graficznych dla fizycznych przedmiotów reklamowych</div>
                        <BreakLine />
                        <div>Zarządzaniem mediami społecznościowymi w zakresie budowania bliżej relacji z klientem</div>
                    </ListWrapper>
                </ListWhatWeDoingWrapper>
            </RealizationsItemsWrapper>
            <SocialMediaInset />
        </ONasWrapper>
    )
}

export default ONas