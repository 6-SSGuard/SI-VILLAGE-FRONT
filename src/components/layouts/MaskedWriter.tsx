import React from 'react';

interface MaskedWriterProps {
  writer: string;
}

const MaskedWriter: React.FC<MaskedWriterProps> = ({ writer }) => {
  const maskWriter = (writer: string) => {
    return writer.slice(0, 4) + '******';
  };

  return <span>{maskWriter(writer)}</span>;
};

export default MaskedWriter;
