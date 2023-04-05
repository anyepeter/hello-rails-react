import { createAsyncThunk } from "@reduxjs/toolkit";

const getText = createAsyncThunk("greeting", async () => {
  try {
    const text = await fetch("http://127.0.0.1:5000/api/greetings");
    const data = await text.json();
    if (data.message) {
      return {
        success: true,
        data:data.message,
      };
    }
  } catch (r) {
    return { sucess: false, r: r.response.data.message };
  }
});

export default getText;