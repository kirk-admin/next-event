import MainHeader from "./main-header";

const Layout = (props: any) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
