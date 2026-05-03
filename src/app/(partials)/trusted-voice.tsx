import React from 'react';

import Section from '@/components/Layout/Section';
import GridRows from '@/components/TrustVoice-Grid';

export default function TrustedVoice() {
  return (
    <Section
      title='Trusted Voices'
      subtitle='Here’s what people say about working with me — across projects, teams, and timelines.'
      example={true}
      id='client'
    >
      <GridRows />
    </Section>
  );
}
