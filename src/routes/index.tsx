import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Login
} from '@/views';
import { PATH } from './constants';
import { useGlobalContext } from "@/contexts/MainContext";

const Root = () => {
  const { globalState: { activate: isAuthenticated} } = useGlobalContext();

  return (
    <Routes>
    {
      !isAuthenticated ? (
        <Route path={PATH.ROOT} element={<Login />}></Route>
      ) : (
        <Route path={PATH.ROOT} element={<Home />}></Route>
      )
    }
    </Routes>
  );
};
  
export default Root;
