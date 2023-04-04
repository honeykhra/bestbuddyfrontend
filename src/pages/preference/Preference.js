import React from "react";
import "./Preference.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PreferenceGrid from "../../components/PreferenceGrid/PreferenceGrid";
import { Button } from "react-bootstrap";

const Preference = () => {
  return (
    <div>
      <Navbar />
      <div className="preferences-container">
        <h1 className="preferences-heading">Preferences</h1>
        <PreferenceGrid />
        <Button className="submitbutton">Update</Button>
      </div>
      <Footer />
    </div>
  );
};

export default Preference;
