import Footer from "@/layout/Footer";
import { Header } from "../../layout";
import useAuthStore from "./useAuthStore";
import { body } from "./testData";

const Login = () => {
  return (
    <>
      <div>
        <Header />
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
            >
              LOGIN
            </button>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Login;
