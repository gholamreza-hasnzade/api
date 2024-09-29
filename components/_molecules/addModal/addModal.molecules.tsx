'use client';
// * import tools
import { FC } from 'react';
import styled from '@emotion/styled';

// * import interface
import { IAddModal } from '@/components/_molecules/addModal/addModal.molecules.interface';
import { Typography } from '@/components/_atoms';

const ModalContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background: rgba(17, 17, 17, 0.2);
  backdrop-filter: blur(8px);
`;
const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: auto;
  background: #fff;
  border-radius: 6px;
  padding: 16px;
  gap: 16px;
`;
const ModalBody = styled.div`
  width: 100%;
`;

export const AddModalMolecules: FC<IAddModal> = ({
  isOpen = false,
  title,
  renderBody,
  onClick,
  onClose,
}) => {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <Typography> {title} </Typography>
          <div
            onClick={onClose}
            style={{
              cursor: 'pointer',
            }}
          >
            X
          </div>
        </ModalHeader>

        <ModalBody>{renderBody}</ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};
