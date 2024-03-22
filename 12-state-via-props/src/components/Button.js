function Button(props) {
  console.log('Button rendered');

  const { onClick } = props;

  return <button onClick={onClick}>Click me!</button>;
}

export default Button;
