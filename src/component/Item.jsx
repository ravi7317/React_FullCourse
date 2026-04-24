import React from "react";

function Item() {
  const age = 20;
  const Adhar = true;
  const gmail = false;

  return (
    <div className="item-status">
      {/* Ternary Operator */}
      <div className="driving-status">
        {age >= 18 ? (
          <h1>You can Drive</h1>
        ) : (
          <h1>You Can not Drive</h1>
        )}
      </div>

      {/* && Operator */}
      <div className="account-status">
        {Adhar && <h1>You Can Open Bank Account</h1>}
        {gmail && <h1>You Can Open Youtube Account</h1>}
      </div>
    </div>
  );
}

export default Item;
