import dynamic from 'next/dynamic';
import Header from './(partials)/header';
import Hero from './(partials)/hero';

// import ContactUs from './(partials)/contact-us';
// import Faq from './(partials)/faq';
// import Journey from './(partials)/journey';
// import SkillMarque from './(partials)/marque';
// import Portfolio from './(partials)/portfolio';
// import Profile from './(partials)/profile';
// import MyType from './(partials)/typical';
// import UsedTools from './(partials)/used-tools';
// import TrustedVoice from './(partials)/trusted-voice';

export default function Home() {
  return (
    <main>
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
    </main>
  );
}

export const SkillMarque = dynamic(() => import('./(partials)/marque'), {
  loading: () => <p>Loading...</p>,
});

export const Profile = dynamic(() => import('./(partials)/profile'), {
  loading: () => <p>Loading...</p>,
});

export const UsedTools = dynamic(() => import('./(partials)/used-tools'), {
  loading: () => <p>Loading...</p>,
});
const MyType = dynamic(() => import('./(partials)/typical'), {
  loading: () => <p>Loading...</p>,
});
export const Portfolio = dynamic(() => import('./(partials)/portfolio'), {
  loading: () => <p>Loading...</p>,
});

export const Journey = dynamic(() => import('./(partials)/journey'), {
  loading: () => <p>Loading...</p>,
});

export const TrustedVoice = dynamic(
  () => import('./(partials)/trusted-voice'),
  {
    loading: () => <p>Loading...</p>,
  }
);

export const Faq = dynamic(() => import('./(partials)/faq'), {
  loading: () => <p>Loading...</p>,
});

export const ContactUs = dynamic(() => import('./(partials)/contact-us'), {
  loading: () => <p>Loading...</p>,
});
