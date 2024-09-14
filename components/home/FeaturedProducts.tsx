import { fetchFeaturedProducts } from '@/lib/actions';
import React from 'react';
import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid from '../products/ProductsGrid';

export default async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 1) return <EmptyList />;
  return (
    <section className='pt-24'>
      <SectionTitle text='Featured Products' />
      <ProductsGrid products={products} />
    </section>
  );
}
