import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';
import { fetchUserFavorites } from '@/utils/actions';

export default async function FavoritesPage() {
  const favorites = await fetchUserFavorites();
  console.log(favorites);

  if (favorites.length === 0)
    return <SectionTitle text='You have no davorites yet.' />;

  return (
    <div>
      <SectionTitle text='Favorites' />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
}
