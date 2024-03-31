import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import data from './data';
import { Routes, Route, Link } from 'react-router-dom'

function App() {

    let [shoes] = useState(data)

  return (
    <div className="App">

        <Navbar bg="ligth" variant="ligth">
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home"><Link to={"/"}>Home</Link></Nav.Link>
                    <Nav.Link href="#features"><Link to={"/detail"}>Detail</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <Routes>
            <Route path="/" element={<Home shoes={shoes}></Home>}/>
            <Route path="/detail" element={<Detail></Detail>}/>
        </Routes>
    </div>
  );
}

function Home(props) {
    return (
        <div>
            <div className="main-bg"></div>
            <div className="container">
                <div className="row">
                    {
                        props.shoes.map((a, i) => {
                            return (
                                <Card shoes={props.shoes[i]} i={i}></Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function Detail() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">상품명</h4>
                    <p>상품설명</p>
                    <p>120000원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

function Card(props) {
    return (
        <div className="col-md-4">
            <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%"/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price} won</p>
        </div>
    )
}

export default App;
