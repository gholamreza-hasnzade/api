// * Import Interfaces

export interface ICheckbox {
  // * your interface
  id?: string;
  title?: string;
  checked?: boolean | undefined;
  onChange: (checked: boolean) => void;
}
