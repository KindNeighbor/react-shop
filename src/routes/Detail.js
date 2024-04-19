import { useParams } from "react-router-dom";
import styled from 'styled-components'
import {useEffect, useState} from "react";


let YelloBtn = styled.button`
    background: ${ props => props.bg };
    color : ${ props => props.bg === 'blue' ? 'white' : 'black' };
    padding: 10px;
`;

let Box = styled.div`
  padding : 20px;
  background : grey
`;

function Detail(props) {

    let [count, setCount] = useState(0);
    let [alerts, setAlerts] = useState(true);
    let [num, setNum] = useState('');

    let {id} = useParams();
    let changeId = parseInt(id) + 1;
    let product = props.shoes.find(x => x.id == id);


    useEffect(() => {
        let a = setTimeout(() => { setAlerts(false) }, 2000)
        if (isNaN(num) == true) {
            alert('숫자만 입력해주세요');
        }
        return () => {
            clearTimeout(a);
        }
    }, [num])

    return (
        <div className="container">
            {
                alerts == true
                    ? <div className="alert alert-warning">
                        2초 이내 구매시 할인
                    </div>
                    : null
            }
            {count}
            <button onClick={() => { setCount(count+1)}}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${changeId}.jpg`} width="100%"/>
                </div>
                <div className="col-md-6">
                    <input onChange={(e) => {setNum(e.target.value)}}></input>
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