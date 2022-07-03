import React from "react";
import styled from "styled-components";
import Theme from "style/Theme";
import useCountUp from "hook/useCountUp";
interface TextInfoCardProps {
  userData?: number;
  reviewData?: number;
  saveData?: number;
}

const TextInfoCard = (props: TextInfoCardProps) => {
  const { userData = 700, reviewData = 100, saveData = 470 } = props;

  const userCount = useCountUp(userData, 2000);
  const reviewCount = useCountUp(reviewData, 2000);
  const saveCount = useCountUp(saveData, 2000);
  return (
    <Container>
      <Text>
        <HilightText>{userCount}만명</HilightText>의 사용자
      </Text>
      <Text>
        <HilightText>{reviewCount}만개</HilightText>의 리뷰
      </Text>
      <Text>
        <HilightText>{saveCount}만개</HilightText>의 저장
      </Text>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Text = styled.p`
  font-size: 3.6rem;
  margin-bottom: 20px;
`;
const HilightText = styled.span`
  font-weight: 800;
`;
export default TextInfoCard;
