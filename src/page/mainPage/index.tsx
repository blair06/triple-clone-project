import React from "react";
import TextBadge from "component/TextBadge";
import AppleImg from "asset/img/badge-apple4x.png";
import AwardImg from "asset/img/play-store2x.png";
import styled, { keyframes } from "styled-components";
import TripleLogo from "asset/img/triple2x.png";
import Theme from "style/Theme";
import TextInfoCard from "component/TextInfoCard";
import { FadeIn } from "style/Animation";

const MainPage = () => {
  return (
    <Container>
      <Wrapper>
        <LogoArea>
          <Logo src={TripleLogo} />
          <Text>2021년 12월 기준</Text>
        </LogoArea>
        <InfoArea>
          <TextInfoCard></TextInfoCard>
        </InfoArea>
        <BadgeArea>
          <TextBadge imgURL={AwardImg}>
            2018 구글 플레이스토어
            <br /> 올해의 앱 최우수상 수상
          </TextBadge>
          <TextBadge imgURL={AppleImg}>
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </TextBadge>
        </BadgeArea>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
`;
const Wrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  column-gap: 200px;
  height: 550px;
  width: 100%;
  padding: 50px 200px;
  min-width: 1200px;
  grid-template-rows: 1.5fr 1fr;
  grid-template-columns: repeat(2, 1fr);
`;
const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  animation: ${FadeIn} 0.7s linear;
`;
const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  animation: ${FadeIn} 0.7s 0.1s linear;
`;
const BadgeArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  animation: ${FadeIn} 0.7s 0.2s linear;
`;
const Logo = styled.img`
  width: 450px;
`;
const Text = styled.p`
  position: relative;
  bottom: 80px;
  color: ${Theme.gray100};
`;
export default MainPage;
