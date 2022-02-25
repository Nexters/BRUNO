import { Navigate } from 'react-router-dom';

import { useLogin } from '@src/hooks';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
}

function Auth({ component: Component }: Props) {
  const { isLoggedIn, userId } = useLogin();

  if (isLoggedIn && userId) return <Navigate to="/" />;

  return Component;
}

export default Auth;
