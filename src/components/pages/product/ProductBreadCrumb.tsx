import React from 'react';
import Link from 'next/link';
import BreadRightIcon from '@/components/icons/product/breadRightIcon';
import BreadVIcon from '@/components/icons/product/breadVIcon';

interface BreadcrumbProps {
  pathname: string;
}

const ProductBreadCrumb: React.FC<BreadcrumbProps> = ({ pathname }) => {
  const pathSegments = pathname.split('/').filter(Boolean);
  const filteredSegments = pathSegments.filter(
    (segment) => segment !== 'product'
  );

  const maxSegments = 2;
  const visibleSegments = filteredSegments.slice(0, maxSegments);

  return (
    <nav aria-label="breadcrumb" className="p-[0px_16px_0px_24px] h-8">
      <ol className="flex space-x-2">
        {visibleSegments.length > 0 && (
          <li className="flex items-center">
            <Link href={`/${visibleSegments[0]}`} className="text-black">
              {visibleSegments[0]}
            </Link>
            <BreadRightIcon />
          </li>
        )}

        {visibleSegments.length > 1 && (
          <li className="flex items-center">
            <Link
              href={`/${visibleSegments[0]}/${visibleSegments[1]}`}
              className="text-black"
            >
              {visibleSegments[1]}
            </Link>
            <BreadVIcon />
          </li>
        )}
      </ol>
    </nav>
  );
};

export default ProductBreadCrumb;
