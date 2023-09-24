import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

const Landingpage = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Header />
        </div>

        <div className="col-12">
          <Nav />
        </div>

        <div className="col-12">
          <Main />
        </div>

        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
