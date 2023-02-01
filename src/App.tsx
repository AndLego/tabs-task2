import React from "react";
import { CompaniesList, Details, Title } from "./components/index";

const api = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    setLoading(false);
  }, []);

  if (loading) {
    return <Title title={"hang on, we are loading..."} />;
  }

  if (!jobs) {
    return <Title title={"loading..."} />;
  }

  return (
    <>
      <Title title={"experience"} />
      <main>
        <CompaniesList jobs={jobs} setCurrent={setCurrent} current={current} />
        <Details jobs={jobs} current={current} />
      </main>
    </>
  );
}

export default App;
