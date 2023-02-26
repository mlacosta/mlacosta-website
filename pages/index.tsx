import { ContactIcons } from 'lib/components/ContactIcons';
import { Name } from 'lib/components/Name';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Name />
      <ContactIcons />
    </>
  );
};

export default Home;
