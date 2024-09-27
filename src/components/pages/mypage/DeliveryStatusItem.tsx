import React from 'react';

interface DeliveryStatusItemProps {
  icon: React.ReactNode;
  label: string;
  count: number;
}

const DeliveryStatusItem: React.FC<DeliveryStatusItemProps> = ({
  icon,
  label,
  count,
}) => {
  return (
    <li className="flex items-center">
      <span className="flex flex-col items-center">
        {icon}
        <p className="pt-2">{label}</p>
        <p>{count}</p>
      </span>
    </li>
  );
};

export default DeliveryStatusItem;
