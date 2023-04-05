import React, { useState, useEffect } from 'react';

function Day8() {
  const [message, setMessage] = useState("Hello dear one, learning React?");

  useEffect(() => {
    console.log("useEffect called");
    setTimeout(() => {
      setMessage("Great.......This is time to learn about Hooks");
    }, 2000);
  }, []);

  return (
    <center><div>
      <h1>{message}</h1>
    </div></center>
  );
}

export default Day8;