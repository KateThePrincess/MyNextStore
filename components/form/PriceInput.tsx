import { Input } from '../ui/input';
import { Label } from '../ui/label';
type FormInputNumberProps = {
  defaultValue?: number;
};
const name = 'price';
export default function PriceInput({ defaultValue }: FormInputNumberProps) {
  return (
    <div className='mb-4'>
      <Label htmlFor={name} className='capitalize'>
        Price ($)
      </Label>
      <Input
        id={name}
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        type='number'
        required
      />
    </div>
  );
}
