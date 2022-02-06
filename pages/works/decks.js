import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/layouts/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="CL Decks & Fences">
      <Container>
        <Title>
          CL Decks & Fences <Badge>2021</Badge>
        </Title>
        <P>A landing page for a local contractor company.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website:</Meta>
            <Link
              target="_blank"
              href="https://kenz-dempsey.github.io/decks-and-fences/"
            >
              https://kenz-dempsey.github.io/decks-and-fences/
              <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Code:</Meta>
            <Link
              target="_blank"
              href="https://github.com/kenz-dempsey/decks-and-fences"
            >
              https://github.com/kenz-dempsey/decks-and-fences{' '}
              <ExternalLinkIcon mx="1px"></ExternalLinkIcon>
            </Link>
          </ListItem>
          <Meta>Technologies:</Meta>
          <span>Bootstrap & JavaScript</span>
        </List>
        <WorkImage src="/images/thumbdecks.png" />
        <WorkImage src="/images/worksimg/decks-02.png" />
        <WorkImage src="/images/worksimg/decks-03.png" />
      </Container>
    </Layout>
  )
}

export default Work
