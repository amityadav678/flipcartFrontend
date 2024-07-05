import { InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CustomButtons from "./CustomButtons";
import "./Search.css";
const Search = () => {
  return (
    <>
      <div className="inputSearch">
        <InputBase
          className="inputBox"
          placeholder="Search for Products and More"
        />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      <CustomButtons />
    </>
  );
};
export default Search;
