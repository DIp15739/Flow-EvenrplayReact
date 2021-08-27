interface props {
  data: any;
}
const GameTitle = ({ data }: props) => {
  return (
    <>
      {data === null ? (
        <h3>Need for Speed Heat: Keys to the Map</h3>
      ) : (
        <h3>{data.name}</h3>
      )}
    </>
  );
};

export default GameTitle;
