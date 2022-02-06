import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/layouts/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Bloc Fitness">
      <Container>
        <Title>
          Bloc Fitness <Badge>2021</Badge>
        </Title>
        <P>
          A landing page for a personal trainer and life coach, with functional
          form submission.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website:</Meta>
            <Link
              target="_blank"
              href="https://kenz-dempsey.github.io/blocfitness/"
            >
              https://kenz-dempsey.github.io/blocfitness/
              <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Code:</Meta>
            <Link
              target="_blank"
              href="https://github.com/Kenz-Dempsey/blocfitness"
            >
              https://github.com/Kenz-Dempsey/blocfitness{' '}
              <ExternalLinkIcon mx="1px"></ExternalLinkIcon>
            </Link>
          </ListItem>
          <Meta>Technologies:</Meta>
          <span>Bootstrap, Vanilla JavaScript & Wow.js</span>
        </List>
        <WorkImage src="/images/thumbblocfitness.png" />
        <WorkImage src="/images/worksimg/bloc-01.png" />
        <WorkImage src="/images/worksimg/bloc-02.png" />
        <WorkImage src="/images/worksimg/bloc-03.png" />
        <WorkImage src="/images/worksimg/bloc-04.png" />
      </Container>
    </Layout>
  )
}

export default Work
