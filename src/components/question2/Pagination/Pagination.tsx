import { Button } from "@mui/material";
import "./pagination.css";

type Props = {
  data: any;
  currPage: number;
  setCurrPage: any;
};

const Pagination: React.FC<Props> = ({ ...props }) => {
  const pageChange = (e: any) => {
    props.setCurrPage(Number(e.target.innerText) - 1);
  };

  return (
    <div className="pagination-wrapper">
      {props.data.map((item: any) => {
        return (
          <Button
            key={props.data.indexOf(item) + 1}
            variant="outlined"
            onClick={pageChange}
          >
            {props.data.indexOf(item) + 1}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;