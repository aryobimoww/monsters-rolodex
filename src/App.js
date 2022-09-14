import React from "react";
// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.components";
import "./App.css";

//function component

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log(searchField);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  console.log("render");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="search-box"
        onSearchChange={onSearchChange}
        placeHolders="search monster"
      />
      <br />
      <SearchBox
        className="search-box"
        onSearchChange={onTitleChange}
        placeHolders="search monster"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class component
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title"> Monsters Rolodex</h1>
//         <SearchBox
//           onSearchChange={onSearchChange}
//           placeHolders="search monster"
//         />
//         <CardList monsters={filteredMonsters} />
//         <button
//           onClick={() =>
//             this.setState({
//               name: { firstName: "yamato", lastName: "yoshitsune" },
//             })
//           }
//         >
//           change name
//         </button>
//       </div>
//     );
//   }
// }

export default App;
