import CarouselJourney from '@/components/journeyCarousel';
import Section from '@/components/Layout/Section';

const Journey = () => {
  return (
    <div>
      <Section
        title='My Journey in Tech'
        subtitle='From small gigs to real-world challenges — each experience helped me grow as a builder and problem-solver.'
        id='journey'
        position='left'
        container={true}
        className='relative w-full'
      >
        <CarouselJourney />
      </Section>
    </div>
  );
};

export default Journey;
