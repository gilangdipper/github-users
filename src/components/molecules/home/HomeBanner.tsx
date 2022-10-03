import { FC } from 'react'
import Text from '../../atoms/Text'

const HomeBanner: FC<{ numberOfUsers: number }> = ({ numberOfUsers }) => {
  return (
    <>
      <Text fontSize={20} fontWeight="700">
        Top {numberOfUsers} Github Users
      </Text>
      <Text fontSize={14}>Tap the username to see more information</Text>
    </>
  )
}

export default HomeBanner
