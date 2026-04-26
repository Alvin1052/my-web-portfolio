'use client';
// import store from '@/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ReactNode } from 'react';
// import { Provider } from 'react-redux';
const ProviderComponent = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    // <Provider store={store}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    // </Provider>
  );
};

export default ProviderComponent;
