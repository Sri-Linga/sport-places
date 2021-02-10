import * as React from "react";
import SportPlaces from "./containers/SportPlaces";

const App: React.FC<{}> = (): React.ReactElement => {
  return (
    <React.Fragment>
      <SportPlaces />
    </React.Fragment>
  );
};

export default App;
