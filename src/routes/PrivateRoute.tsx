import { Navigate } from 'react-router-dom';

import { useLogin } from '@src/hooks';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
}

function PrivateRoute({ component: Component }: Props) {
  const { isLoggedIn } = useLogin();
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isLoggedIn ? Component : <Navigate to="/login" />;
}

export default PrivateRoute;
