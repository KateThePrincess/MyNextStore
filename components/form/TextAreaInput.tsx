import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};
export default function TextAreaInput({
  name,
  labelText,
  defaultValue,
}: TextAreaInputProps) {
  return (
    <div className='mb-4 '>
      <Label htmlFor={name} className='capitalize'>
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        required
        defaultValue={defaultValue}
        rows={5}
        className='leading-loose'
      />
    </div>
  );
}
