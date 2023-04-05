import React, { useEffect } from 'react';
import getText from '../redux/getData';
import { useDispatch, useSelector } from 'react-redux';



function Greeting (){
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getText());
  }, [dispatch]);
  const message = useSelector((state) => state.message);
  console.log(message)

  return <h1>Welcome {message.data.message}</h1>;
}

export default Greeting