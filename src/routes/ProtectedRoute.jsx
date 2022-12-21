import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({
   isAllowed,
   redirectPath = '/sign-in',
   children,
}) => {
   if (!isAllowed) {
      return <Navigate to={redirectPath} replace />
   }
   return children || <Outlet />
}
