import { FC } from 'react'
import Link from 'next/link'
import { Layout } from '../components/layout'
import { InnerLoginLink, MainCentered, MainTitle } from '../components/sharedstyles'


const Home: FC = () => {
  return (
    <Layout>
      <MainCentered>
        <MainTitle>lamessagerie</MainTitle>
        <Link href="/messages">
          <InnerLoginLink>
            connecter
          </InnerLoginLink>
        </Link>
      </MainCentered>
    </Layout>
  )
}


export default Home
