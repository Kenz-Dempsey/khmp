import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/layouts/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Gotham Graffiti">
      <Container>
        <Title>
          Gotham Graffiti and Pressure Washing <Badge>2022</Badge>
        </Title>
        <P>A webpage for a local pressure washing company.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website:</Meta>
            <Link target="_blank" href="https://gothamgraffiti.ca/">
              https://gothamgraffiti.ca/
              <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
            </Link>
          </ListItem>
          <ListItem></ListItem>
          <Meta>Technologies:</Meta>
          <span>WordPress, PHP & Apache</span>
        </List>
        <WorkImage src="/images/thumbGotham.png" />
        <WorkImage src="/images/worksimg/gotham1.png" />
        <WorkImage src="/images/worksimg/gotham2.png" />
        <WorkImage src="/images/worksimg/gotham3.png" />
        <WorkImage src="/images/worksimg/gotham4.png" />
        <WorkImage src="/images/worksimg/gotham5.png" />
        <WorkImage src="/images/worksimg/gothamfaq.png" />
        <WorkImage src="/images/worksimg/gothamcontact.png" />
      </Container>
    </Layout>
  )
}

export default Work
