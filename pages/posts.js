import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbFirstFreelance from '../public/images/thumbFirstFreelance.jpg'
import thumbCoolors from '../public/images/thumbCoolors.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Top Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My First Freelance Client as a Web Developer"
            thumbnail={thumbFirstFreelance}
            href="https://kenzdempsey.medium.com/my-first-freelance-client-as-a-web-developer-58ee76a53120"
          />
          <GridItem
            title="My top FREE resources for web development"
            thumbnail={thumbCoolors}
            href="https://kenzdempsey.medium.com/my-top-free-resources-for-web-development-7e9e8aeef06"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
