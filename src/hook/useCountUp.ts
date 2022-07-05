import { useEffect, useState } from 'react'

import easeOutQuint from 'util/EaseOutQuint'

const useCountUp = (endNum: number, duration = 2000) => {
  const [count, setCount] = useState(0)
  const frameRate = 1000 / 60
  const totalFrame = Math.round(duration / frameRate)

  useEffect(() => {
    let currentNum = 0

    const counter = setInterval(() => {
      currentNum += 1
      const process = easeOutQuint(currentNum / totalFrame)
      setCount(Math.round(endNum * process))

      if (currentNum === totalFrame) {
        clearInterval(counter)
      }
    }, frameRate)
  }, [])

  return count
}

export default useCountUp
