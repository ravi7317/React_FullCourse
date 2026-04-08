import React from "react";

function Item() {
  const age = 20;
  const Adhar = true;
  const gmail = false;
  return (
    <>
    {/* Turnary Operator */}
    <div>
      {age >= 18 ? (
        <>
          <h1>You can Drive</h1>
        </>
      ) : (
        <>
          <h1>You Can not Drive</h1>
        </>
      )}
    </div>
    {/* && Operator */}
    {Adhar && <h1>You Can Open Bank Account</h1>}
    {gmail && <h1>You Can Open Youtube Account</h1> }
    </>
  );
}

export default Item;
