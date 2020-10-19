import React from "react";

export default function Fetching({ isFetching }) {
  if (isFetching)
    return (
      <div className="loading-container flex-center">
        <div className="loading" />
      </div>
    );
  else return <></>;
}
