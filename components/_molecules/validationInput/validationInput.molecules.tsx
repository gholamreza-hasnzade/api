'use client';
/// * import tools
import { FC } from 'react';

// * import components
import { InputGroup, Label, Input, Typography } from '@/components/_atoms';

// * import interface
import { IValidationInput } from '@/components/_molecules/validationInput/validationInput.molecules.interface';

export const ValidationInputMolecules: FC<IValidationInput> = ({
  title,
  isRequired,
  placeholder,
  type,
  variant,
  value,
  name,
  onChange,
  formError,
  color = 'red',
  fontSize = 10,
  helperTitle,
}) => {
  return (
    <InputGroup>
      <Label title={title} isRequired={isRequired} />
      <Input
        placeholder={placeholder}
        type={type}
        variant={variant}
        value={value}
        name={name}
        onChange={onChange}
      />
      {formError && (
        <Typography color={color} fontSize={fontSize}>
          {formError}
        </Typography>
      )}
      {helperTitle && (
        <Typography color="#7f7f7f" fontSize={10}>
          {helperTitle}
        </Typography>
      )}
    </InputGroup>
  );
};
