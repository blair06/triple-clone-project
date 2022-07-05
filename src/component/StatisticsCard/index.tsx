import styled from 'styled-components'

import Theme from 'style/Theme'
import useCountUp from 'hook/useCountUp'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${Theme.onBackground};
`
const Text = styled.p`
  font-size: 3.6rem;
  margin-bottom: 20px;
`
const HilightText = styled.span`
  font-weight: 700;
`

interface StatisticsCardProps {
  userData?: number
  reviewData?: number
  saveData?: number
}

const StatisticsCard = (props: StatisticsCardProps) => {
  const { userData = 100, reviewData = 100, saveData = 100 } = props

  const userCount = useCountUp(userData, 2000)
  const reviewCount = useCountUp(reviewData, 2000)
  const saveCount = useCountUp(saveData, 2000)

  return (
    <Container>
      <Text>
        <HilightText>{userCount}만명</HilightText>의 여행자
      </Text>
      <Text>
        <HilightText>{reviewCount}만개</HilightText>의 여행 리뷰
      </Text>
      <Text>
        <HilightText>{saveCount}만개</HilightText>의 여행 일정
      </Text>
    </Container>
  )
}

export default StatisticsCard
