'use client';

import { useEffect, useRef, useState } from 'react';

type TimelineEvent = {
  title: string;
  description: string;
  date: string;
};

const events: TimelineEvent[] = [
  { title: 'Founded', description: 'Company was founded', date: '2020' },
  { title: 'Launched Product', description: 'First product released', date: '2021' },
  { title: 'Raised Seed', description: 'Raised $1M seed funding', date: '2022' },
  { title: 'Expanded Team', description: 'Team grew to 20+', date: '2023' },
];

const Timeline = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [blueTop, setBlueTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      const totalScrollable = scrollHeight - clientHeight;
      const scrollPercent = scrollTop / totalScrollable;

      const movableRange = scrollHeight - 200; // height of blue bar
      const newTop = scrollPercent * movableRange;
      setBlueTop(newTop);
    };

    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen w-full bg-white">
      {/* Scrollable container that contains BOTH timeline and events */}
      <div
        ref={scrollContainerRef}
        className="h-full overflow-y-scroll flex pr-6"
      >
        {/* Timeline column */}
        <div className="relative w-12 flex flex-col items-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-2 bg-gray-300 rounded-full" />

          {/* Blue bar */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bg-blue-500 w-2 rounded-full"
            style={{
              top: `${blueTop}px`,
              height: '200px',
              transition: 'top 0.1s ease-out',
            }}
          />

          {/* Numbers aligned with events */}
          <div className="pt-16 space-y-32 z-10">
            {events.map((_, index) => (
              <div
                key={index}
                className="w-6 h-6 bg-white border-2 border-blue-500 text-blue-600 font-bold text-sm rounded-full flex items-center justify-center"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Events column */}
        <div className="flex-1 py-16 space-y-32">
          {events.map((event, index) => (
            <div key={index} className="min-h-[50vh]">
              <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-1">{event.description}</p>
              <span className="text-sm text-gray-400">{event.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
