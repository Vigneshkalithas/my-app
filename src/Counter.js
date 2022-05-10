import { useState } from "react";

// hook is function - stars with 'use'
// useState 
// const [state,setState] = useState(InitialValue);
// setState - Informs React  State is changed - re-render (updating)
export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (
    <div>
      <button className="btn-like" onClick={() => { setLike(like + 1); }}>👍{like}</button>
      <button className="btn-dislike" onClick={() => { setdisLike(dislike + 1); }}>👎{dislike}</button>
    </div>
  );
}
