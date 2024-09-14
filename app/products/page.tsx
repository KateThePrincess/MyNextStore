import ProductsContainer from '@/components/products/ProductsContainer';
import React from 'react';

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  console.log(searchParams);

  return <ProductsContainer layout={layout} search={search} />;
}
