import React, { useEffect, useState } from "react";

// Styles
import View from "./Pager.styles"
import { Button } from "./PageBtn.styles";
const Pager = ({ page, count, total, paging }) => {
   const pagesPerBlock = 10;
   const [totalPage, setTotalPage] = useState(0);
   const [pageGroup, setPageGroup] = useState(0);
   const [last, setLast] = useState(0);
   const [first, setFirst] = useState(0);

   useEffect(() => {
      if (total) setPageInfo();
   }, [total]);

   useEffect(() => {
      if (total) setPageInfo();
   }, [page]);

   useEffect(() => {
      if (pageGroup) setLast(pageGroup * pagesPerBlock);
   }, [pageGroup]);

   useEffect(() => {
      if (last > totalPage) return setLast(totalPage);
      setFirst(last - (pagesPerBlock - 1));
   }, [last]);

   useEffect(() => {
      if (first && pageGroup === Math.ceil(totalPage / pagesPerBlock)) setFirst(1 + pagesPerBlock * (pageGroup - 1));
   }, [first]);

   const setPageInfo = () => {
      setTotalPage(Math.ceil(total / count));

      const p = Math.ceil(page / pagesPerBlock);
      if (p === pageGroup) setLast(pageGroup * pagesPerBlock);
      else setPageGroup(Math.ceil(page / pagesPerBlock));
   };

   return (
      <View>
         {total === 0 || total === null ? null : (
            <>
               {first - 1 > 0 ? <Button onClick={paging} value={first - 1}></Button> : null}
               <ol>
                  {[...Array(last)].map((n, index) => {
                     const num = first + index;
                     if (num > totalPage) return;
                     return (
                        <li key={num} value={num} onClick={paging} className={page == num ? "active" : ""}>
                           {num}
                        </li>
                     );
                  })}
               </ol>
               {last < totalPage ? <Button onClick={paging} value={last + 1}></Button> : null}
            </>
         )}
      </View>
   );
};

export default Pager;