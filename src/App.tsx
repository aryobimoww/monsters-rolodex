// import logo from "./logo.svg";
import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.components";
import "./App.css";
import { getData } from "./utils/data.utils";
//function component
export type Monster = {
  id: string;
  name: string;
  email: string;
};
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log(searchField);
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  console.log("render");
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onSearchChange={onSearchChange}
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
