import React from "react";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full h-[56px] bg-slate-100 placeholder-slate-400 px-6 border-2 border-slate-900 rounded-3xl relative z-10 focus:outline-none text-slate-900 nanum-regular-16"
        placeholder="할 일을 입력해주세요"
      />
      <div className="w-full h-[56px] bg-slate-900 rounded-3xl absolute top-[3.5px] left-1 z-0" />
    </div>
  );
};

export default SearchBar;
