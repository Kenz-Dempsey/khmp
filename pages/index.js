import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  SimpleGrid,
  List,
  ListItem,
  Icon,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/layouts/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/bio'
import Logo from '../components/layouts/logo'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a front-end developer based in Canada
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              <div>
                {'<'}Kenz Dempsey {'/>'}
              </div>
            </Heading>
            <p>Digital Architect ( Developer / Designer / Creator )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whieAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/kenz.jpg"
              alt="profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Kenz is a freelance web developer based in Vancouver, Canada with a
            passion for technology and content creation. He loves helping people
            start their own businesses and achieve their goals. When not on the
            computer, he loves reading, cooking and mountain biking.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Ontario, Canada.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Created several successful dropshipping businesses.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Decided to try coding a basic website, and instantly became
            obsessed.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Bought all the books he could find on JavaScript/HTML & CSS and
            tought himself to code.
          </BioSection>
          <BioSection>
            <BioYear>2020 - present</BioYear>
            Works as a freelance Web Dev.
          </BioSection>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>
            Music, Reading, Fitness, Philosophy, Fixing cars, Mountain biking &
            Motorcycles.
          </Paragraph>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Kenz-Dempsey" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Kenz-Dempsey
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/kenzngton/?hl=en"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @Kenzngton
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/kenz-dempsey-465658209/">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Kenz Dempsey
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  Aflame#0001
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
