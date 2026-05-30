import TextField from './fields/TextField';
import TextareaField from './fields/TextareaField';
import SelectField from './fields/SelectField';
import SwitchField from './fields/SwitchField';
import ImageField from './fields/ImageField';
import ArrayField from './fields/ArrayField';
import ColorField from './fields/ColorField';
import ObjectField from './fields/ObjectField';

export const fieldRegistry = {
  text: TextField,
  textarea: TextareaField,
  select: SelectField,
  switch: SwitchField,
  image: ImageField,
  array: ArrayField,
  color: ColorField,
  object: ObjectField,
};
