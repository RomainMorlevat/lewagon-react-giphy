const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
  }

  render() {
    return (
      <h1 className={this.state.clicked ? "clicked" : ""}>
        Hello, {this.props.name}
      </h1>
    );
  }
}
