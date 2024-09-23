import React, { Children } from "react";
import "./Search.scss";
export interface Props {
  searchClass?: string;
  searchId?: string;
  searchPlaceholder?: string;
  searchClick?: () => void;
  searchValue?: string;
  searchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchLabelText?: string;
  searchkeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  searchkeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  searchBtnVisible?: boolean;
  searchBtnText?: any;
  searchBtnClass?: string;
  searchBtnId?: string;
  children?: any;
  searchGroup?: boolean;
}

const Search = ({
  searchClass,
  searchId,
  searchPlaceholder,
  searchClick,
  searchValue,
  searchChange,
  searchLabelText,
  searchkeyDown,
  searchkeyUp,
  searchBtnVisible,
  searchBtnText,
  searchBtnClass,
  searchBtnId,
  children,
  searchGroup
}: Props) => {
  return (
    <div className={`search${searchClass ? " " + searchClass : ""}`}>
      <div className={`search-container${searchGroup ? ' searchGroupBtn' : ''}`}>
        {searchLabelText && <label htmlFor={searchId}>{searchLabelText}</label>}
        <input
          type="search"
          value={searchValue}
          onChange={searchChange}
          id={searchId && searchId}
          placeholder={searchPlaceholder}
          onKeyDown={searchkeyDown}
          onKeyUp={searchkeyUp}
        />
        {searchBtnVisible && (
          <button
            className={`srchBtn${searchBtnClass ? " " + searchBtnClass : ""}`}
            id={searchBtnId}
            onClick={searchClick}
          >
            {searchBtnText ? searchBtnText : "Search"}
          </button>
        )}
      </div>
      {children && <div className="search-results">{children}</div>}
    </div>
  );
};

export default Search;
