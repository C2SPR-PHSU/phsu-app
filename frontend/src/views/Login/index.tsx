import { Navigator } from "../../components";
import { useGlobalContext } from "@/contexts/MainContext";

const Login = () => {
  const { globalState, dispatchGlobal } = useGlobalContext();

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
            onClick={() =>
              dispatchGlobal({
                type: "ACTIVATE"
              })
            }
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
