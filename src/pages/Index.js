import React from "react";

import VerticalNav from "../components/vertical-navs/VerticalNav2";
import Header from "../components/headers/Header4";

export default function Index() {
  return (
    <React.Fragment>
      <VerticalNav
        content={{
          brand: {
            text: "Dhanai Fruits Mart",
            image: "mui-assets/img/logo-pied-piper-white.png",
            width: "120"
          },
          "brand-small": {
            text: "Dhanai Fruits Mart",
            image: "mui-assets/img/logo-pied-piper-white-icon.png",
            width: "32"
          },
          link1: "Home",
          link2: "Product",
          link4: "Contact"
        }}
        bucketMain={[<Header content={null} />]}
      />
    </React.Fragment>
  );
}
