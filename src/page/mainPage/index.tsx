import styled from 'styled-components'

import AwardCard from 'component/AwardCard'
import StatisticsCard from 'component/StatisticsCard'
import { AppleImg, AwardImg, TripleLogoImg } from 'asset'
import { FadeIn } from 'style/Animation'
import Theme from 'style/Theme'

const Container = styled.div`
  display: flex;
  width: 100%;
  min-width: 1200px;
  height: 100vh;
  align-items: center;
`
const Wrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  column-gap: 200px;
  height: 550px;
  width: 100%;
  padding: 50px 10vw;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
`
const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  animation: ${FadeIn} 0.7s linear;
`
const InfoArea = styled.div`
  min-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  animation: ${FadeIn} 0.7s 0.1s linear;
`
const BadgeArea = styled.div`
  min-width:480px;
  display: flex;
  flex-direction: row;
  align-items: flex-start
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  animation: ${FadeIn} 0.7s 0.2s linear;
`
const Logo = styled.img`
  width: 450px;
`
const Text = styled.p`
  position: relative;
  bottom: 80px;
  font-size: 1.5rem;
  color: ${Theme.gray100};
`

const MainPage = () => {
  return (
    <Container>
      <Wrapper>
        <LogoArea>
          <Logo src={TripleLogoImg} />
          <Text>2021년 12월 기준</Text>
        </LogoArea>
        <InfoArea>
          <StatisticsCard userData={700} reviewData={100} saveData={470} />
        </InfoArea>
        <BadgeArea>
          <AwardCard imgurl={AwardImg}>
            2018 구글 플레이스토어
            <br /> 올해의 앱 최우수상 수상
          </AwardCard>
          <AwardCard imgurl={AppleImg}>
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </AwardCard>
        </BadgeArea>
      </Wrapper>
    </Container>
  )
}

export default MainPage
