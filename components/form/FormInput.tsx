import { Input } from '../ui/input';
import { Label } from '../ui/label';
type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};
export default function FormInput({
  defaultValue,
  label,
  name,
  type,
  placeholder,
}: FormInputProps) {
  return (
    <div className='mb-4'>
      <Label htmlFor={name} className='capitalize'>
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
