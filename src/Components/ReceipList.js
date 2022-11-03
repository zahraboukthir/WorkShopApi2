import React, { useEffect } from "react";
import ReceipCard from "./ReceipCard";
import { useDispatch, useSelector } from 'react-redux';
import { getallreceieps } from "../js/receipActions";
import { Spinner } from "react-bootstrap";

export const ReceipList = () => {
  const dispatch=useDispatch()
  const list=useSelector(state=>state.list)
  const loading=useSelector(state=>state.loading)
const serachedvalue=useSelector(state=>state.serachedvalue)
  useEffect(() => {
    dispatch(getallreceieps(serachedvalue))
  }, [serachedvalue]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        
      }}
    > {loading ? (
      <div>
        ..........loading <br />
      <Spinner animation="border" variant="primary" />
      </div>
    ) :(
      list.map((el, i) => (
        <ReceipCard receip={el.recipe} key={i} />
      )))}
    </div>
  );
};
