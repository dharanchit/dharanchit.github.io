import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <p>
        You can reach out to me on{" "}
        <Link
          to="https://www.linkedin.com/in/anchitdhar/"
          style={{ color: "black", textDecoration: "none" }}
          target={"_blank"}
        >
          <b>LinkedIn</b>
        </Link>
        {" "}or mail me at{" "}
        <Link
          to="mailto:anchitdhar1@gmail.com"
          style={{ color: "black", textDecoration: "none" }}
        >
          <b>Here</b>
        </Link>
      </p>
    </Layout>
  );
};

export default Contact;
