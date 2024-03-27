function Reset(props) {
  const buttonStyle = { backgroundColor: 'lightgreen' };
  const { onClick } = props;

  return (
    <div>
      <div>
        <button style={buttonStyle} onClick={onClick}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Reset;
