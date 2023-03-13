// Para conectar a API com o front, mas no react não está funcionando. 
// Precisa descobrir como que conecta, pois no tutorial está sendo usado classe, e o chocoalicia está todo usando function.


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    return (
      <p className="App-intro">{this.state.apiResponse}</p>
    )
  }

}