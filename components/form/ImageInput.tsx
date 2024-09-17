import { Input } from '../ui/input';
import { Label } from '../ui/label';

const name = 'image';
export default function ImageInput() {
  return (
    <div className='mb-4 grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor={name} className='capitalize'>
        image
      </Label>
      <Input id={name} name={name} type='file' required accept='image/*' />
    </div>
  );
}
