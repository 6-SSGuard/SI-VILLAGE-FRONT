import React

from "react";

function EventFilter({eventListCnt}:{eventListCnt:number}) {
    return (
      <section className='sticky top-0 px-6 mt-4 ml-2 bg-white font-bold text-base '>
        <p>총 <span className="text-orange-300 ">{eventListCnt}</span>건</p>
      </section>
    )
  }
  
  export default EventFilter