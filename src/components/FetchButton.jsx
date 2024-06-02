import React from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../actions/userActions";

const FetchButton = () => {
  const dispatch = useDispatch();

  const handleFetch = () => {
    dispatch(fetchUsers());
  };

  return <button onClick={handleFetch}>Fetch Data</button>;
};

export default FetchButton;
