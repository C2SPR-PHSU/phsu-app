import { useEffect } from 'react';
import { useGlobalContext } from "../../contexts/MainContext";
import { getTest } from './functions';

const Home = () => {
  const { globalState } = useGlobalContext();
  const testing = async () => await getTest()
  
  useEffect(() => {
    const response = testing()
    console.log(response)
  }, [])
  
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
