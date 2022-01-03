import type { NextPage } from 'next';
import { Banner } from './home/components/banner';
import { TopTeacher } from './home/components/top-teacher';
import { KeepUpToUpdate } from './home/components/keep-up';
import { ShareSkill } from './home/components/share-skill';
import { AdsCard } from './home/components/ads-card'

const Home: NextPage = () => {
  return (
    <div className='home'>
      <Banner />
      <AdsCard/>
      <KeepUpToUpdate />
      <TopTeacher />
      <ShareSkill />
    </div>
  );
};

export default Home
