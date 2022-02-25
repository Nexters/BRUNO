import { Navigate } from 'react-router-dom';

import { useLogin } from '@src/hooks';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
}

function Auth({ component: Component }: Props) {
  const { isLoggedIn, userId, finishOnboard } = useLogin();

  if (isLoggedIn && userId && finishOnboard) return <Navigate to="/" />;

  return Component;
}

export default Auth;
