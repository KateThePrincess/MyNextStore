import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { fetchAllProducts } from '@/utils/actions';
import Link from 'next/link';

export default async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : '';
  return (
    <>
      {/* HEADER */}
      <section>
        <div className='flex justify-between items-center'>
          <h4 className='font-medium text-lg'>
            {totalProducts} product{totalProducts > 1 && 's'}
          </h4>
          <div className='flex gap-x-4'>
            <Button
              variant={layout === 'list' ? 'outline' : 'ghost'}
              size='icon'
              asChild
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuList className='h-4 w-4' />
              </Link>
            </Button>
            <Button
              variant={layout === 'grid' ? 'outline' : 'ghost'}
              size='icon'
              asChild
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid className='h-4 w-4' />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Separator className='mt-4' />
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className='text-wxl mt-16'>
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}
