import React from 'react';

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="font-normal text-base md:text-xl font-plusjakarta">
      {children}
    </p>
  );
};

export default Paragraph;
