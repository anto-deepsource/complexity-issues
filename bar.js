export function bar() { return null }

var Hello = createReactClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
