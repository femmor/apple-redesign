import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Header, Landing } from '../components';
import { Tab } from '@headlessui/react';
import { fetchCategories } from '../utils/fetchCategories';

interface Props {
  categories: Category[];
}

// Backend code
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();

  return {
    props: {
      categories,
    },
  };
};

const Home = ({ categories }: Props) => {
  const uniqueCategories = categories.filter(cat => cat.title !== 'Apple');

  const showProducts = () => {};

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
      <section className="promoSection">
        <div className="promosContainer">
          <h1 className="promoSectionTitle">New Promos</h1>

          <Tab.Group>
            <Tab.List className="promoTabList">
              {uniqueCategories.map(category => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `promoTab ${
                      selected
                        ? 'borderGradient bg-[#35383C] text-white'
                        : 'border-b-2 border-[#35383C] text-[#747474]'
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="promoTabPanels">
              Test
              {/* <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel> */}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Home;
