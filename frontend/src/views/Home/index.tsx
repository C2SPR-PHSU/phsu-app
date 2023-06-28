import { Title } from "../../components";
import { useGlobalContext } from "../../contexts/MainContext";

const Home = () => {
  const { globalState, dispatchGlobal } = useGlobalContext();

  return (
    <>
      <div>
        <Title />
        <section
          style={{
            display: "flex",
            justifyContent: "flex-end",
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
            Activated
          </button>
          <p>{`${globalState.activate}`}</p>
        </section>
      </div>
    </>
  );
};

export default Home;
