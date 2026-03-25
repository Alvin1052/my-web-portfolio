import CarouselJourney from '@/components/journeyCarousel';
import Section from '@/components/Layout/Section';

const Journey = () => {
  return (
    <Section
      title='My Journey in Tech'
      subtitle='From Physical Network to Real-World Digital Application challenges — each experience helped me grow as a builder and problem-solver.'
      id='journey'
      position='left'
      container={true}
      className='relative w-full'
    >
      <CarouselJourney />
    </Section>
  );
};

export default Journey;
