import { Route, Routes } from "react-router-dom";
import { Home, Login, Register, NotFound } from "@/views";
import { UnauthorizedLayout, AuthorizedLayout } from "@/layout";
import { PATH } from "./constants";
import useAuthStore from "@/hooks/useAuthStore";

const Root = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path={PATH.ROOT} element={<UnauthorizedLayout />}>
          <Route path={PATH.ROOT} element={<Login />} />
        </Route>
      ) : (
        <Route path={PATH.ROOT} element={<AuthorizedLayout />}>
          <Route path={PATH.ROOT} element={<Home />}></Route>
        </Route>
      )}
      <Route path={PATH.REGISTER} element={<Register />} />
      <Route path={PATH.NOT_FOUND} element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
