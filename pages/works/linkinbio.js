import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/layouts/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Link In Bio">
      <Container>
        <Title>
          Link in Bio <Badge>2022</Badge>
        </Title>
        <P>
          A link in bio page for Instagram or other social media platforms to
          showcase multiple links, using HTML/CSS and Vanilla JS, with
          <Link target="_blank" href="https://www.vantajs.com/">
            {' '}
            Vanta
          </Link>{' '}
          used to animate the background
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website:</Meta>
            <Link target="_blank" href="https://linkinbio-omega.vercel.app/">
              linkinbio-omega.vercel.app/
              <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Code:</Meta>
            <Link
              target="_blank"
              href="https://github.com/Kenz-Dempsey/linkinbio"
            >
              https://github.com/Kenz-Dempsey/linkinbio{' '}
              <ExternalLinkIcon mx="1px"></ExternalLinkIcon>
            </Link>
          </ListItem>
          <Meta>Technologies:</Meta>
          <span>
            HTML/CSS, Vanilla JS and{' '}
            <Link target="_blank" href="https://www.vantajs.com/">
              {' '}
              Vanta{' '}
            </Link>
          </span>
        </List>
        <WorkImage src="/images/thumbLinkinbio.png" />
      </Container>
    </Layout>
  )
}

export default Work
