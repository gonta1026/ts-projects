import React from 'react';

type Props = {
  message: string;
  children: React.ReactNode;
}
const Child: React.FC<Props> = (Props) => {
  const { message, children } = Props;
  return (
    <div className="Child">
      {children}
      {message}
    </div>
  );
}

export default Child;