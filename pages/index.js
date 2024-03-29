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
  IoLogoReact,
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoWordpress,
  IoMail,
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
            <meta
              name="description"
              content="I'm a front-end developer based in Canada. I build websites and web apps."
            />
            <Heading as="h2" variant="page-title">
              <div>
                {'<'}Kenz Dempsey {'/>'}
              </div>
            </Heading>
            <p>Digital Architect (Developer / Designer / Creator)</p>
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
              src="/images/kenz2.jpeg"
              alt="kenz dempsey web developer profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <meta
            name="work"
            content="professional wordpress web developer vancouver"
          />
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am a freelance web developer based in Vancouver, Canada with a
            passion for technology and content creation. I love helping people
            start their own businesses and achieve their goals. When not on the
            computer, I love working on cars, reading and mountain biking.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                aria-label="My Web Development Portfolio"
              >
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
            Bought all the books I could find on JavaScript/HTML & CSS and
            tought myself to code.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Started first job for a private e-Commerce company as a front-end
            developer.
          </BioSection>
          <BioSection>
            <BioYear>2020 - present</BioYear>
            Working as a freelance Web Dev.
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

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Paragraph>
            <Icon as={IoLogoHtml5} />
            <BioYear> ‎ ‎HTML5</BioYear>
          </Paragraph>
          <Paragraph>
            <Icon as={IoLogoCss3} />
            <BioYear> ‎ ‎CSS3</BioYear>
          </Paragraph>
          <Paragraph>
            <Icon as={IoLogoJavascript} />
            <BioYear> ‎ ‎JavaScript</BioYear>
          </Paragraph>
          <Paragraph>
            <Icon as={IoLogoReact} />
            <BioYear> ‎ ‎React.js</BioYear>
          </Paragraph>
          <Paragraph>
            <Icon as={IoLogoWordpress} />
            <BioYear> ‎ ‎WordPress</BioYear>
          </Paragraph>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="mailto:kenz@kenz.dev">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                >
                  kenz@kenz.dev
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
              <Link href="https://www.linkedin.com/in/kenz-dempsey-465658209/">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                  target="_blank"
                >
                  Kenz Dempsey
                </Button>
              </Link>
            </ListItem>
            {/* <ListItem>
              <Link href="/">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  Aflame#0001
                </Button>
              </Link>
            </ListItem> */}
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
