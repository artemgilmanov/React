function Counter(props) {
  console.log('Counter rendered');

  const { count } = props;
  return <h1>Total clicks: {count}</h1>;
}

export default Counter;
