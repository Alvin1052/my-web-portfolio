import { ScrollArea } from '../ui/scroll-area';

const ScrollExample = () => {
  return (
    <ScrollArea className='h-72 w-48 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm leading-none font-medium'>Tags</h4>
        {Array(100)
          .fill(0)
          .map((_, tag) => (
            <div key={tag}>
              <div className='text-sm'>{tag}</div>
              <div className='my-2' />
            </div>
          ))}
      </div>
    </ScrollArea>
  );
};

export default ScrollExample;
