import './App.css';

function WhoAmI(props){
  return(
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>Some Link</a>
    </div>
  )
}

function App() {
    return(
      <div className="App">
        <WhoAmI name="Dima" surname="surname" link="https://www.google.com/"/>
      </div>
    ); 
}

export default App;
