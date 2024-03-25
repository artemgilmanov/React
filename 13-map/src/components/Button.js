function Button(props) {
  console.log('Button rendered');

  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
}

export default Button;
