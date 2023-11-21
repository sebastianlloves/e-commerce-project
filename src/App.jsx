import React, { useEffect } from "react";
import Navigation from "./routes/Navigation";

export default function App() {
  useEffect(() => {
    async () => {
      const response = await fetch(
        "https://store.renault.com.ar/?ORIGIN=sea_defensive&CAMPAIGN=ar-nov-2023-search-ads-360-l-newcar-renault_store&gclsrc=aw.ds&&gclid=CjwKCAiAxreqBhAxEiwAfGfndJaBy4LCkBvWFgQDmQtxvGVxQryos5p-2x0rMIK_6cZo4DcLJbx3choCybkQAvD_BwE&pdv=c"
      );
      console.log(response.json());
    };
  }, []);

  return <Navigation />;
}
