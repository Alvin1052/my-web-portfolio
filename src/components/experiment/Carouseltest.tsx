import { useEffect, useRef, useState } from 'react';

const photosItem = [
  { id: 1, color: '#ff6b6b', label: 'Photo 1' },
  { id: 2, color: '#4ecdc4', label: 'Photo 2' },
  { id: 3, color: '#45b7d1', label: 'Photo 3' },
  { id: 4, color: '#96ceb4', label: 'Photo 4' },
  { id: 5, color: '#ffeead', label: 'Photo 5' },
  { id: 6, color: '#d4a5a5', label: 'Photo 6' },
  { id: 7, color: '#9b59b6', label: 'Photo 7' },
  { id: 8, color: '#3498db', label: 'Photo 8' },
  { id: 9, color: '#e74c3c', label: 'Photo 9' },
  { id: 10, color: '#2ecc71', label: 'Photo 10' },
];
const Carouseltest = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalItems = photosItem.length;
  const itemWidth = 564; // Width of each item in pixels

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Apply transform with transition
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // Handle seamless looping
    const resetPosition = () => {
      carousel.style.transition = 'none';
      if (currentIndex === totalItems) {
        setCurrentIndex(0);
        carousel.style.transform = `translateX(-${itemWidth}px)`;
      } else if (currentIndex === -1) {
        setCurrentIndex(totalItems - 1);
        carousel.style.transform = `translateX(-${(totalItems - 1) * itemWidth}px)`;
      }
      // Re-enable transition after reset
      setTimeout(() => {
        carousel.style.transition = 'transform 0.5s ease-in-out';
      }, 0);
    };

    // Trigger reset after transition ends
    const handleTransitionEnd = () => {
      if (currentIndex === totalItems || currentIndex === -1) {
        resetPosition();
      }
    };

    carousel.addEventListener('transitionend', handleTransitionEnd);
    return () =>
      carousel.removeEventListener('transitionend', handleTransitionEnd);
  }, [currentIndex, totalItems]);
  return (
    <div className=' '>
      <div className='overflow-sc'>
        <div
          ref={carouselRef}
          className='flex'
          style={{
            display: 'flex',
            width: `${itemWidth * photosItem.length}px`,
          }}
        >
          {photosItem.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className='mr-10 flex h-[300px] items-center justify-center border-4 border-indigo-400'
              id='carousel-item'
              style={{
                width: `${itemWidth}px`,
                backgroundColor: item.color,
              }}
            >
              <p className='text-lg font-bold text-white'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-10 flex w-1/4 justify-between gap-10'>
        <button
          id='prevBtn'
          onClick={() => handlePrev()}
          className='h-30 w-50 bg-amber-500'
        >
          Previous
        </button>
        <button
          id='nextBtn'
          onClick={() => handleNext()}
          className='h-30 w-50 bg-amber-500'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carouseltest;
