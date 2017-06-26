class PasswordChecker extends React.Component {
  constructor(props) {
    super();
    this.state = {
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkChar = this.checkChar.bind(this);
    this.checkLower = this.checkLower.bind(this);
    this.checkUpper = this.checkUpper.bind(this);
    this.finalCheck = this.finalCheck.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  checkChar() {
    return this.state.text.length >= 5;
  }

  checkLower() {
    let regexp = /[a-z]/;
    return regexp.test(this.state.text);
  }

  checkUpper() {
    let regexp= /[A-Z]/;
    return regexp.test(this.state.text);
  }

  finalCheck() {
    return this.checkUpper() && this.checkLower() && this.checkChar();
  }

  render() {
    return (
      <div className="app">
        <input
          type="text"
          placeholder=" Your passW is..."
          onChange={this.handleChange}
        />
        <div className="rules">
          
            <p className={this.checkLower() ? "passed" : "missing"}>
              Min 1 lower character
            </p>
            <p className={this.checkUpper() ? "passed" : "missing"}>
              Min 1 upper character
            </p>

            <p className={this.checkChar() ? "passed" : "missing"}>
              Min total 5 characters
          </p>
        </div>
        <button type="button" disabled={this.finalCheck() ? false : true}> Submit </button>
      </div>
    );
  }
}

ReactDOM.render(<PasswordChecker />, document.getElementById("container"));

