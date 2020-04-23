import Head from 'next/head'
import TopAppBar from '../components/topAppBar';

class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>NextJS PWA</title>
        </Head>
        <TopAppBar />
      </>
    )
  }
}

export default Index;
