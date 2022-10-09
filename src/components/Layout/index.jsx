// here Header is called in Layout const
import Header from "../Header";

const Layout = (props) => {
  return (
    <div >
      <Header />

      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
