'use client';

import ContactUs from './partials/contact-us';
import Faq from './partials/faq';
import Header from './partials/header';
import Hero from './partials/hero';
import Journey from './partials/journey';
import SkillMarque from './partials/marque';
import Portfolio from './partials/portfolio';
import Profile from './partials/profile';
import TrustedVoice from './partials/trusted-voice';
import MyType from './partials/typical';
import UsedTools from './partials/used-tools';

export default function Home() {
  return (
    <div className='h-500'>
      <Header />
      <Hero />
      <SkillMarque />
      <Profile />
      <UsedTools />
      <MyType />
      <Portfolio />
      <Journey />
      <TrustedVoice />
      <Faq />
      <ContactUs />
    </div>
  );
}
