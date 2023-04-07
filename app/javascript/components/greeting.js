import React, { useEffect } from 'react';
import fetchData from '../redux/getData';
import { useDispatch, useSelector } from 'react-redux';


function Greeting (){
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const message = useSelector((state) => state.value);
  console.log(message)

  return <h1> {message.data.greeting}</h1>;
}

export default Greeting