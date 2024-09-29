// * import tools
import { ChangeEvent, FC } from 'react';

// * import tools
import '@/components/_atoms/checkbox/checkbox.atom.style.css';

// * import
import { ICheckbox } from '@/components/_atoms/checkbox/checkbox.atom.interface';
export const CheckboxAtom: FC<ICheckbox> = ({ id, title, checked, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        className="custom-checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id} className="custom-label">
        {title}
      </label>
    </div>
  );
};
