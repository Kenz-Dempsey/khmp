import { Container, Heading, SimpleGrid, Divider, Link } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbDecks from '../public/images/thumbDecks.png'
import thumbBlocfitness from '../public/images/thumbBlocfitness.png'
import thumbParallax from '../public/images/thumbParallax.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="decks"
              title="CL Decks & Fences"
              thumbnail={thumbDecks}
            >
              A landing page for a local contractor company made with Bootstrap
              and Vanilla JS.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="blocfitness"
              title="Bloc Fitness"
              thumbnail={thumbBlocfitness}
            >
              A landing page for a personal trainer made with Bootstrap, Vanilla
              JS and Wow.js
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="parallax"
              title="Parallax Demo Site"
              thumbnail={thumbParallax}
            >
              A parallax scrolling webpage made with pure HTML/CSS
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
