import { Route, Routes } from "react-router-dom";
import { Home, Login, Register, NotFound, RequestServices } from "@/views";
import Recovery from "@/views/Recovery";
import { UnauthorizedLayout, AuthorizedLayout } from "@/layout";
import { PATH } from "./constants";
import useAuthStore from "@/hooks/useAuthStore";
// import ServiceRequest from "@/views/ ServiceRequest";

const Root = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path={PATH.ROOT} element={<UnauthorizedLayout />}>
          <Route path={PATH.ROOT} element={<Login />} />
          <Route path={PATH.REGISTER} element={<Register />} />
          <Route path={PATH.PASSWORDRECOVERY} element={<Recovery />} />
        </Route>
      ) : (
        <Route path={PATH.ROOT} element={<AuthorizedLayout />}>
          <Route path={PATH.ROOT} element={<Home />}></Route>
          <Route
            path={PATH.REQUEST_SERVICES}
            element={<RequestServices />}
          ></Route>
        </Route>
      )}
      <Route path={PATH.NOT_FOUND} element={<NotFound />} />
      <Route path="*" element={<NotFound />} />

      {/* {/* <Route path={PATH.PROFILE} element={<Profile />} /> */}
    </Routes>
  );
};

export default Root;
