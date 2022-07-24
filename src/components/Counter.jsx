import React from 'react';

function Counter() {
  const counterBtnStyle =
    'bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer';

  return (
    <div>
      <div className="flex items-center justify-center text-2xl">
        Quantity
        <div className="flex ml-5 shadow-md">
          <div className={`${counterBtnStyle} rounded-l-md`}>-</div>
          <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
            1
          </div>
          <div className={`${counterBtnStyle} rounded-r-md`}>+</div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
