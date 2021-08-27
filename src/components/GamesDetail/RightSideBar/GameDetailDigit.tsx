interface props {
  data: any;
}
const GameDetailDigit = ({ data }: props) => {
  const dataList = [
    {
      leftTitle: "SOLD BY",
      leftSubTitle:
        data === null || data.soldBuy === undefined
          ? "2141 collectors"
          : `${data.soldBuy} collectors`,
      rightTitle: "FOR SALE",
      rightSubTitle:
        data === null || data.forSale === undefined
          ? "2352"
          : `${data.forSale}`,
    },
    {
      leftTitle: "TOP SALE",
      leftSubTitle:
        data === null || data.topSale === undefined
          ? "$645"
          : `${data.topSale}`,
      rightTitle: "LOWEST ASK",
      rightSubTitle:
        data === null || data.lowestAsk === undefined
          ? "$5"
          : `${data.lowestAsk}`,
    },
  ];

  return (
    <>
      {dataList.map((d: any, i: any) => (
        <div className="detailDigit">
          <div className="firstDetailDigit">
            <p>{d.leftTitle}</p>
            <h5>{d.leftSubTitle}</h5>
          </div>
          <div className="lastDetailDigit">
            <p>{d.rightTitle}</p>
            <h5>{d.rightSubTitle}</h5>
          </div>
        </div>
      ))}
      <div className="price">
        <span>PRICE</span>
        {data === null ? <span>0.50 ETH</span> : <span>{data.price} ETH</span>}
      </div>
    </>
  );
};

export default GameDetailDigit;
