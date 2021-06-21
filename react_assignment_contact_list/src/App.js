import Sidebar from "./components/SideBar/Sidebar";
import Header from "./components/Contact/Header";
import Search from "./components/Contact/Search";

import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Sidebar />
      <Header />
      <Search />
      {/* <MainLayout /> */}
      {/* <Contacts /> */}
      {/* {showDetails && <ContactDetail />} */}
    </Fragment>
  );
}

export default App;
