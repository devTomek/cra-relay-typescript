import { FC } from "react";
import "./Page.scss";

const Page: FC = ({ children }) => {
  return <div className="page">{children}</div>;
};

export default Page;
