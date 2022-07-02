import React, { ReactNode } from "react";
import Theme from "style/Theme";
import styled from "styled-components";

interface TextBadgeProps {
  imgURL: string;
  children: ReactNode;
}
const TextBadge = (props: TextBadgeProps) => {
  const { imgURL, children } = props;
  return (
    <Container>
      <BadgeImg src={imgURL} alt="badgeImg"></BadgeImg>
      <Text>{children}</Text>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const BadgeImg = styled.img`
  height: 100%;
`;
const Text = styled.p`
  color: ${Theme.gray200};
  font-size: 1.5rem;
`;
export default TextBadge;
