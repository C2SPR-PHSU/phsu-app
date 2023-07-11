import { Route, Routes } from "react-router-dom";
import { Home, Login, Register, NotFound, RequestServices } from "@/views";
import { UnauthorizedLayout, AuthorizedLayout } from "@/layout";
import { PATH } from "./constants";
import useAuthStore from "@/hooks/useAuthStore";
import RequestService from "@/views/Service Request";

const Root = () => {
  const isAuthenticated = useAuthStore((state: any) => state.isAuthenticated);

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
      <Route path={PATH.ERROR404} element={<Error404 />} />
      <Route path={PATH.ERROR500} element={<Error500 />} />
      <Route path="*" element={<NotFound />} />
      <Route path={PATH.PROFILE} element={<Profile />} />
      <Route path={PATH.REQUESTSERVICES} element={<RequestService />} />
    </Routes>
  );
};

export default Root;
