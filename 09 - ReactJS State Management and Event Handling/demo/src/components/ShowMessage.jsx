const ShowMessage = (props) => {
  const fname = props.fname;

  return (
    <>
      <p>Hi, I am {fname}!</p>
    </>
  );
};

export default ShowMessage;