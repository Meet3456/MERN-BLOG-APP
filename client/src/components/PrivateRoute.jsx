import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  // get the currentUser from the user slice
  const { currentUser } = useSelector((state) => state.user);
  // if the currentUser is present, then render the Outlet component, else redirect to the sign-in page.
  // outlet is used to render the child components of the private route.(components nested inside the private route)
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}
