import React from "react";
import Layout from "../../Components/Layout";
import SecTitle from "../../Components/SecTitle";
import SupTitle from "../../Components/SupTitle";
import Form from "../../Components/Form";

const Contact = () => {
  return (
    <Layout className={'bg-Secondary m-auto h-96'}>
      <SecTitle title={"Join Our Mailing List"} />
      <SupTitle
        supTitle={
          <>
            Sign up to receive inspiration, product updates,<br />
            and special offers from our team.
          </>        }
      />
      <Form />
    </Layout>
  );
};

export default Contact;
