import { SubmitButton } from '@/components/form/Buttons';
import MyCheckbox from '@/components/form/Checkbox';
import FormInput from '@/components/form/FormInput';
import ImageInput from '@/components/form/ImageInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { faker } from '@faker-js/faker';
import { createProductAction } from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';

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
        <FormContainer action={createProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
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
          </div>
          <TextAreaInput
            name='description'
            labelText='description'
            defaultValue={description}
          />
          <div className='mt-6'>
            <MyCheckbox name='featured' label='featured' />
          </div>
          <SubmitButton text='create product' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}
