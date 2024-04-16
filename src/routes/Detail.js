import { useParams } from "react-router-dom";

function Detail(props) {

    let {id} = useParams();
    let changeId = parseInt(id) + 1;
    let product = props.shoes.find((x) => x.id == id);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${changeId}.jpg`} width="100%"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price} 원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;