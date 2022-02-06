import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/layouts/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Parallax Scrolling Site">
      <Container>
        <Title>
          Parallax Srolling Site <Badge>2021</Badge>
        </Title>
        <P>
          A simple landing page to demonstrate the parallax scrolling effect.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website:</Meta>
            <Link
              target="_blank"
              href="https://kenz-dempsey.github.io/Parallax/"
            >
              https://kenz-dempsey.github.io/Parallax/
              <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Code:</Meta>
            <Link
              target="_blank"
              href="https://github.com/Kenz-Dempsey/Parallax"
            >
              https://github.com/Kenz-Dempsey/Parallax{' '}
              <ExternalLinkIcon mx="1px"></ExternalLinkIcon>
            </Link>
          </ListItem>
          <Meta>Technologies:</Meta>
          <span>Vanilla HTML/CSS</span>
        </List>
        <WorkImage src="/images/worksimg/parallax01.gif" />
      </Container>
    </Layout>
  )
}

export default Work
