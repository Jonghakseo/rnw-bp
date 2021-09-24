import styled from "styled-components/native";

export const ContainerWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.common.colors.red};
`;
