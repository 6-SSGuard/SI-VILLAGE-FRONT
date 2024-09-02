import React from 'react';
function Filter({ filterCnt }: { filterCnt: number }) {
  return (
    <section>
      <p>{filterCnt}</p>
    </section>
  );
}
export default Filter;
