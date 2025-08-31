import Section from '@/components/Layout/Section';
import TableCompare from '@/components/TableOfComplement';

const MyType = () => {
  return (
    <div className='relative'>
      <Section
        id='comparison'
        title='Not Your Typical Frontend Developer'
        subtitle='I care about how it looks, how it works, and how it feels — all at
          once'
        container={true}
        position='center'
        className='relative'
      >
        {/* Table */}

        <TableCompare className='relative z-100' />
      </Section>
      {/* Background Image */}
      <div className='to-primary-300/50 absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-bl from-black from-50% to-100%' />
      <div className='bg-hero-pattern absolute top-0 left-0 z-1 h-full w-full' />
    </div>
  );
};

export default MyType;
