import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { SubmitButton } from '@/components/form/Buttons';
import CheckboxInput from '@/components/form/Checkbox';
import ImageInputContainer from '@/components/form/ImageInputContainer';

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await fetchAdminProductDetails(id);
  const { name, company, description, featured, price } = product;

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>{name}</h1>
      <div className='border p-8 rounded'>
        {/* IMAGE INPUT CONTAINER */}
        <ImageInputContainer
          action={updateProductImageAction}
          name={name}
          image={product.image}
          text='Update Image'
        >
          <input type='hidden' name='id' value={id} />
          <input type='hidden' name='url' value={product.image} />
        </ImageInputContainer>
        <FormContainer action={updateProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <input type='hidden' name='id' value={id} />
            <FormInput
              type='text'
              name='name'
              label='Product Name'
              defaultValue={name}
            />
            <FormInput
              type='text'
              name='company'
              label='Company'
              defaultValue={company}
            />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name='description'
            labelText='Description'
            defaultValue={description}
          />
          <div className='mt-6'>
            <CheckboxInput
              name='featured'
              defaultChecked={featured}
              label='Featured'
            />
          </div>
          <SubmitButton text='update product' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}
