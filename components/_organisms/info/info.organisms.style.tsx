// * Import Tools
import styled from '@emotion/styled';

const Info = styled('section')`
  display: flex;
  align-items: center;
  width: 100%;
  height: 450px;
`;
const Info_right = styled('div')`
  width: 50%;
  height: 100%;
  background: #21aa58;
  display: flex;
  flex-direction: column;

  .information {
    padding-right: max(140px, 15%);
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: max(140px, 15%);
    h1 {
      color: #fff;
      font-size: 40px;
      margin-bottom: 20px;
    }
  }
`;
const Info_left = styled('div')`
  width: 50%;
  height: 100%;

  img {
    max-width: 100%;
    height: 100%;
  }
`;

export const InfOrganismStyle = {
  Info,
  Info_left,
  Info_right,
};
