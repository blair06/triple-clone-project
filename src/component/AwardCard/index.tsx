import { ReactNode } from 'react'
import styled from 'styled-components'

import Theme from 'style/Theme'

const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 5%;
`
const BadgeImg = styled.img`
  height: 100%;
  margin-right: 10px;
`
const Text = styled.p`
  color: ${Theme.gray200};
  font-size: 1.5rem;
  font-weight: 600;
`

interface AwardCardProps {
  imgurl: string
  children: ReactNode
}
const AwardCard = (props: AwardCardProps) => {
  const { imgurl, children } = props
  return (
    <Container>
      <BadgeImg src={imgurl} alt="badgeImg" />
      <Text>{children}</Text>
    </Container>
  )
}

export default AwardCard
