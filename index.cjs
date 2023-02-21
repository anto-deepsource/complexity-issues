for (i = 0; i < 1; i++) {
  console.log(i);
  debugger;
}
if (i) {
} else {
}
function render() {
  return (
    <div>
      <h1>User Component</h1>
      Hello, <b>{this.props.name}</b>
      <br />
      You are <b>{this.props.age} years old</b>
      <br />
      You live at: <b>{this.props.address}</b>
      <br />
      You were born: <b>{this.props.dob.toDateString()}</b>
    </div>
  );
}
