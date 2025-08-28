import { motion } from 'motion/react';
import React from 'react';

import { cn } from '@/lib/utils';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
  position?: 'left' | 'center' | 'right';
  container?: boolean;
  className?: string;
}
const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  id,
  position = 'center',
  container = true,
  className,
  ...props
}) => {
  return (
    <motion.section
      id={id}
      className={cn(
        `${container ? 'custom-container' : ''} relative overflow-hidden py-10 md:py-20`,
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, when: 'beforeChildren' }}
      {...props}
    >
      {/* Heading */}
      <div className={cn(`text-${position}`, 'relative z-100')}>
        <h2
          className={cn(
            `display-md-bold md:display-xl-bold text-neutral-25`,
            `text-${position}`
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            `text-sm-regular md:text-lg-medium mt-2 items-center text-neutral-400 md:mt-4`,
            `text-${position}`
          )}
        >
          {subtitle}
        </p>
      </div>

      {/* Content */}
      <div className={cn('flex-center mt-6 md:mt-12', className)}>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
