import type { NextPage } from 'next';
import Head from 'next/head';
import { Header, Landing } from '../components';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Apple Redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
    </div>
  );
};

export default Home;
