import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("greetings", async () => {
  try {
    const value = await fetch("http://127.0.0.1:5000/api/greetings");
    const data = await value.json();
    if (data.greeting) {
      return {
        success: true,
        data,
      };
    }
    SENT 
  } catch (r) {
    return { sucess: false, r: r.response.data.value };
  }
});

export default fetchData;