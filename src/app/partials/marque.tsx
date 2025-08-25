import Image from 'next/image';

import Marque from '@/components/ui/marque';

import marqueItems from '@/constants/MarqueSkills';

const SkillMarque = () => {
  return (
    <div className='bg-primary-300 overflow-hidden'>
      <Marque className='py-3 md:py-6'>
        {marqueItems.map((Skill) => (
          <div key={Skill} className='flex items-center justify-center gap-3.5'>
            <div className='md:display-xl-bold text-xl-bold text-white'>
              {Skill}
            </div>
            <div className='size-9.5 md:size-15'>
              <Image
                src={`/icons/skill-icon.svg`}
                alt='icon'
                width={60}
                height={60}
              />
            </div>
          </div>
        ))}
      </Marque>
    </div>
  );
};

export default SkillMarque;
