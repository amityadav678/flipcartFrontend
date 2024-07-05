import { navData } from "../../../data";
import "./Categorys.css";

const Categorys = () => {
  //   const categoryWrapperStyle = {
  //     display: "flex", // Example style, adjust as needed
  //     flexDirection: "row", // Example style, adjust as needed
  //     justifyContent: "space-around", // Example style, adjust as needed
  //     // Add more styles as required
  //   };

  return (
    <div className="categoryWrapper">
      {navData.map((e) => (
        <div key={e.text} className="imageContant">
          <img src={e.url} alt={e.text} />
          <p>{e.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Categorys;
