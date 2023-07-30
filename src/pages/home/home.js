import Topbar from "../../componenets/topbar/topbar";
import Body from "../../componenets/body/body";
import SearchIcon from '@mui/icons-material/Search';
import "./home.css";

export default function Home() {
    return (
        <div className=" Homecontainer row">
          <Topbar />
          <Body>
          <div className="searchbar">
          <SearchIcon className="searchIcon"/>
          <input type="text" placeholder="Search" className="searchInput"/>
          </div>
          </Body>
        

        </div>
    );
    }

