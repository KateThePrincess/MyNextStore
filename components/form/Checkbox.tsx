'use client';

import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

export default function MyCheckbox({
  name,
  label,
  defaultChecked = false,
}: CheckboxInputProps) {
  return (
    <div className='mb-4 flex space-x-2 items-center'>
      <Label
        htmlFor={name}
        className='capitalize text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        {label || name}
      </Label>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  );
}
