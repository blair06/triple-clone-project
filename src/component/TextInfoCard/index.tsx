import React from "react";
import styled from "styled-components";

import Theme from "style/Theme";

import { useEffect, useState } from "react";
interface TextInfoCardProps {
  userData?: number;
  reviewData?: number;
  saveData?: number;
}

const TextInfoCard = (props: TextInfoCardProps) => {
  const { userData = 100, reviewData = 100, saveData = 100 } = props;

  return (
    <Container>
      <Text>
        <HilightText>{userData}만명</HilightText>의 사용자
      </Text>
      <Text>
        <HilightText>{userData}만개</HilightText>의 리뷰
      </Text>
      <Text>
        <HilightText>{userData}만개</HilightText>의 저장
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
