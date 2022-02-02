// import { useEffect } from 'react';
// import styled from 'styled-components';

interface Props {
  isMy?: boolean;
}

function RequestContent({ isMy = false }: Props) {
  return <div>request {isMy}</div>;
}

export default RequestContent;
