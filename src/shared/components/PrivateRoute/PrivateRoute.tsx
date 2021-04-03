import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) => (true //check auth
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
    )}
  />
);
