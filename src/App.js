import React, { useEffect, useState } from "react";
import ComparisionTable from "./ComparisionTable";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.mocky.io/v2/5e9ebdaa2d00007800cb7697")
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          setData(data);
          console.log(data);
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ComparisionTable data={data} />
    </div>
  );
};

export default App;
