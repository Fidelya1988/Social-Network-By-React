import { Pagination } from "antd";
import "antd/dist/antd.css";

const PaginationPages = (props) => {


  return (
    <div>
      <Pagination
        defaultCurrent={props.currentPage}
        total={props.totalCount}
        onChange={props.onChange}
        pageSize={props.pageSize}
      />
    </div>
  );
};

export default PaginationPages;
