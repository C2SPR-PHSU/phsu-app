import { Route, Routes } from 'react-router-dom';
import { Home, Login, Register, NotFound } from '@/views';
import { PATH } from './constants';
import useAuthStore from '@/views/Login/useAuthStore'

const Root = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  return (
    <Routes>
      {
        !isAuthenticated ? (
          <Route path={PATH.ROOT} element={<Login />}></Route>
        ) : (
          <Route path={PATH.ROOT} element={<Home />}></Route>
        )
      }
      <Route path={PATH.LOGIN} element={<Login />}></Route>
      <Route path={PATH.REGISTER} element={<Register />} />
      <Route path={PATH.NOT_FOUND} element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
