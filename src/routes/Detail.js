import { useParams } from "react-router-dom";
import styled from 'styled-components'
import {useEffect, useState} from "react";
import {Button, Navbar, Container, Nav} from 'react-bootstrap'


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
    let [tab, setTab] = useState(0);

    let {id} = useParams();
    let changeId = parseInt(id) + 1;
    let product = props.shoes.find(x => x.id == id);
    let [fade2, setFade2] = useState('');

    useEffect(() => {
        setFade2('end')
        return () => {
            setFade2('')
        }
    }, []);


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
        <div className={`container start ` + fade2}>
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

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab = {tab}></TabContent>

        </div>
    )
}

function TabContent(props) {

    let [fade, setFade] = useState('');

    useEffect(() => {
        let a= setTimeout(() => { setFade('end') }, 100)
        return () => {
            clearTimeout(a);
            setFade('')
        }
    }, [props.tab])

    return(
        <div className={`start ${fade}`}>
            { [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][props.tab] }
        </div>
    )
}

export default Detail;