import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryLinkProps {
  href: string;
  src: string;
  alt: string;
  label: string;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({
  href,
  src,
  alt,
  label,
}) => {
  return (
    <Link href={href} className="flex-shrink-0">
      <Image src={src} alt={alt} width={56} height={56} />
      <span className="text-xs font-bold text-si-787878">{label}</span>
    </Link>
  );
};

export default CategoryLink;
