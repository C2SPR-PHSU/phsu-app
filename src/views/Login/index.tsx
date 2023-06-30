import { Navigator } from "../../components";
import { useGlobalContext } from "@/contexts/MainContext";
// import { requestLogin } from './functions';
import useAuthStore from "./useAuthStore";
import { body } from "./testData";

const Login = () => {
  const { globalState, dispatchGlobal } = useGlobalContext();
  const setLogin = useAuthStore((state) => state.setLogin);

  const login = async() => {
    try {
      const { email, password } = body
      const response = setLogin(email, password)
      console.log('SUCCES!', response)
      dispatchGlobal({ type: "ACTIVATE"})
    } catch (error) {
      
    }
  }

  return (
    <>
      <div>
        <Navigator />
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <h1>LOGIN</h1>

        </section>
        <div>
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <button
              style={{ marginRight: "1rem" }}
              // onClick={() =>
              //   dispatchGlobal({
              //     type: "ACTIVATE"
              //   })
              // }
              onClick={() => login()}
            >
              LOGIN
            </button>
            <p>{`${globalState.activate}`}</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
