import "./App.css";
import { useState } from "react";

export default function App() {

// const users = [{
//   name:"Vignesh kalithas",
//   pic:"https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
// },
// {
//   name : "Lakshmiprabha Kalithas",
//   pic : "https://cdn-icons-png.flaticon.com/512/219/219990.png"

// },
// {
//   name : "Kalithas Ramasamy",
//   pic : "https://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_416292/Image/Profile%20pic.png"

// },
// ];

  return (
    <div className="App">
      {/* <Msg
        name="Vignesh kalithas"
        pic="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
      />
      <Msg
        name="Lakshmiprabha Kalithas"
        pic="https://cdn-icons-png.flaticon.com/512/219/219990.png"
      />
      <Msg
        name="Kalithas Ramasamy"
        pic="https://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_416292/Image/Profile%20pic.png"
      /> */}
      {/* {users.map( user => <Msg name={user.name} pic={user.pic} />)} */}
      {/* <Counter /> */}
      
    </div>
  );
}
// hook is function - stars with 'use'
// useState 
// const [state,setState] = useState(InitialValue);
// setState - Informs React  State is changed - re-render (updating)
// function Counter(){
//   // let like = 10;
//   const [like,setLike] = useState(0);
//   const[dislike,setdisLike] =useState(0);
//   return (
//     <div>
//       <button className="btn-like" onClick={()=> {setLike(like+1)}}>👍{like}</button>
//       <button className="btn-dislike" onClick={()=> {setdisLike(dislike+1)}}>👎{dislike}</button>
//     </div>
//   )
// }
// function Msg({name, pic}){
//   return (
//     <div className="user-container">
//       <img className="profile-pic" src={pic} alt={name} />
//       <h1>Hi,{name}😎😊🤞</h1>
//       <Counter />
//     </div>
//   );
// }

function AddColor(){
  const color="skyblue";
  const styles={
   fontSize:"24px",
   backgroundColor:color,
  };
  return(
  <div>
    <input style={styles}></input>
  </div>
  )
}
