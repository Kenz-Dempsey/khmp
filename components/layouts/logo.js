import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`
// ${useColorModeValue('', '-dark')}
const Logo = () => {
  const beeImg = `/images/BeeLogo${useColorModeValue('', '-Dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image
            src={beeImg}
            width={22}
            height={22}
            alt="kenz dempsey professional wordpress web developer logo | Vancouver based web dev"
          />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            ‎ Kenz Dempsey
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
