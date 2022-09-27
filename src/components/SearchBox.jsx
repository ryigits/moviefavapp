import React from "react";

export default function SearchBox({ searchValue, setSearchValue }) {
    return (
        <>
            <div className="col col-sm-4">
                <input
                    className="form-control"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Type to Search a Movie"
                />
            </div>
        </>
    );
}
