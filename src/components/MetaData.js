import { Helmet } from "react-helmet";
const MetaData = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dhanai Fruits Marts | {title}</title>
    </Helmet>
  );
};

export default MetaData;
