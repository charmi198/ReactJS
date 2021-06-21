import { SidebarData } from "./SidebarData";
import DehazeIcon from "@material-ui/icons/Dehaze";
import "../../styles/Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="root">
      <div className="icon">
        <DehazeIcon />
      </div>

      <div className="sidebar">
        <ul className="sidebarlist">
          {SidebarData.map((val, key) => {
            return (
              <li key={key} className="row">
                <div id="icon">{val.icon}</div>
                {/* <div id={classes.title}>{val.title}</div> */}
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
