import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={0} text={"0%"} strokeWidth={5} />
        </div>
        <p className="title">Total Revenue This Week</p>
        <p className="amount">PKR 0</p>
        <p className="desc">
        </p>
      </div>
    </div>
  );
};

export default Featured;