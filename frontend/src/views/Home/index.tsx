import { useGlobalContext } from "../../contexts/MainContext";

const Home = () => {
  const { globalState } = useGlobalContext();
  
  return (
    <section style={{
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: "center",
      marginBottom: "2rem",
    }}>
      <h1>HOME</h1>
      <p>{`${globalState.activate}`}</p>
    </section>
  );
};

export default Home;
