import FormInput from '@/components/form/FormInput';
import ImageInput from '@/components/form/ImageInput';
import PriceInput from '@/components/form/PriceInput';
import { Button } from '@/components/ui/button';
import { faker } from '@faker-js/faker';
const createProductAction = async (formData: FormData) => {
  'use server';
  const name = formData.get('name') as string;
  console.log(name);
};

export default function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  const price = 100;
  const image =
    'https://www.pexels.com/pl-pl/zdjecie/piec-plakatow-zawieszonych-na-scianie-462235/';
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md grid'>
        <form action={createProductAction}>
          <FormInput
            label='product name'
            name='name'
            type='text'
            defaultValue={name}
          />
          <FormInput
            label='company'
            name='company'
            type='text'
            defaultValue={company}
          />
          <PriceInput />
          <ImageInput />
          <Button type='submit' size='lg'>
            Publish Product
          </Button>
        </form>
      </div>
    </section>
  );
}
