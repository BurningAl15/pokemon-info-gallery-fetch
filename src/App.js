import CustomRoutes from './components/CustomRoutes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomRoutes />
      </header>
    </div>
  );
}

export default App;

// componentDidMount() {
//   fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
//     .then(response => {
//       return response.json();
//     })
//     .then(response => {
//       this.setState({ pokemon: response, loading: false })
//       console.log(response);
//     })
// }