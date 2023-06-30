import { Navigator } from "../../components";
import useAuthStore from "./useAuthStore";
import { body } from "./testData";

const Login = () => {
  const setLogin = useAuthStore((state) => state.setLogin);

  const login = async() => {
    try {
      const { email, password } = body
      const response = setLogin(email, password)
    } catch (error) {}
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
              onClick={() => login()}
            >
              LOGIN
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
