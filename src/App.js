import "./App.css";
import { Counter } from "./Counter";
import { AddColor } from "./AddColor";

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
      <AddColor/>      
    </div>
  );
}
function Msg({name, pic}){
  return (
    <div className="user-container">
      <img className="profile-pic" src={pic} alt={name} />
      <h1>Hi,{name}😎😊🤞</h1>
      <Counter />
    </div>
  );
}


