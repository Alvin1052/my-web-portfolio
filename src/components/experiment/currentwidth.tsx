import { useEffect, useState } from 'react';

const WindowSizeViewer = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='bg- flex h-screen items-center justify-center'>
      <div className='rounded-lg bg-white p-6 shadow-lg'>
        <h1 className='mb-4 text-2xl font-bold'>Current Window Size</h1>
        <p className='text-lg'>Width: {windowSize.width}px</p>
        <p className='text-lg'>Height: {windowSize.height}px</p>
      </div>
    </div>
  );
};

export default WindowSizeViewer;
