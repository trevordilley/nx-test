import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface WebSharedProps {}

const StyledWebShared = styled.div`
  color: pink;
`;

export function WebShared(props: WebSharedProps) {
  return (
    <StyledWebShared>
      <h1>Welcome to Shared!</h1>
    </StyledWebShared>
  );
}

export default WebShared;
