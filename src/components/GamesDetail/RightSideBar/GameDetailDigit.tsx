const GameDetailDigit = () =>{

    const data = [
        {
            leftTitle: "SOLD BY",
            leftSubTitle: "2141 collectors",
            rightTitle: "FOR SALE",
            rightSubTitle: "2352"
        },
        {
            leftTitle: "TOP SALE",
            leftSubTitle: "$645",
            rightTitle: "LOWEST ASK",
            rightSubTitle: "$5"
        },
    ]

    return(
        <>
            {data.map((d: any,i: any) => (
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
                <span>0.50 ETH</span>
            </div>
        </>
    );
}

export default GameDetailDigit;