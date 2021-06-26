import React from "react";
import { Pagination } from "antd";
import "antd/dist/antd.css";

const PaginationPages = React.memo((props) => {
 
  return (
    <div>
      {console.log(props)}
      <Pagination
        defaultCurrent={props.currentPage}
        total={props.totalCount}
        onChange={props.onChange}
        pageSize={props.pageSize}
      />
    </div>
  );
})

export default PaginationPages;
