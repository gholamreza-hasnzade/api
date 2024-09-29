// * Import Tools
import styled from '@emotion/styled';

const RegisterWrapper = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(17, 17, 17, 0.2);
  backdrop-filter: blur(8px);
  z-index: 1;
`;
const RegisterHeader = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;


const RegisterHeaderBotton = styled('div')`
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 25px;
`;

export const ModalMoleculeStyle = {
  RegisterWrapper,
  RegisterHeader,
  RegisterHeaderBotton,
};
