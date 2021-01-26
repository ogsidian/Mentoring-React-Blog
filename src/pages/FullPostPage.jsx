function FullPostPage(props) {
  return (
    <>
      <p>Privet {props.match.params.id}</p>
    </>
  );
}

export default FullPostPage;
