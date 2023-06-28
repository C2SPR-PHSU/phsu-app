import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Login
} from '@/views';
import { PATH } from './constants';
import { useGlobalContext } from "@/contexts/MainContext";

const Root = () => {
  const { globalState } = useGlobalContext();
  const isAuthenticated = globalState.activate

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
