import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import {createContext, useEffect, useState} from "react";
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'
import Cart from './routes/Cart.js'
import axios from 'axios';

// export let Context1 = createContext();

function App() {

    let [shoes, setShoes] = useState(data)
    let [count, setCount] = useState(2);
    let [stock, setStock] = useState([10, 11, 12])
    let navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('watched') === null) {
            localStorage.setItem('watched', JSON.stringify([]));
        }
    }, []);

  return (
    <div className="App">

        <Navbar bg="ligth" variant="ligth">
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/detail')}}>Detail</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/event')}}>Event</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/about')}}>About</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/cart')}}>Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <Routes>
            <Route path="/" element={<Home shoes={shoes} setShoes={setShoes}
                                           count={count} setCount={setCount}/>}/>
            <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/event" element={<Event />}>
                <Route path="one" element={<div>event one1</div>}/>
                <Route path="two" element={<div>event two2</div>}/>
            </Route>
            <Route path="/about" element={<About />}>
                <Route path="member" element={<div>member</div>}/>
                <Route path="location" element={<div>location</div>}/>
            </Route>
            <Route path="*" element={<div>404 NOT FOUND</div>}/>
        </Routes>
    </div>
  );
}

function Event() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
            <span><Link to={"/event/one"}>1</Link> <Link to={"/event/two"}>2</Link></span>
        </div>
    )
}

function About() {
    return (
        <div>
            <h4>회사 정보</h4>
            <Outlet></Outlet>
        </div>
    )
}

function Home(props) {
    return (
        <div>
            <div className="main-bg"></div>
            <div className="container">
                <div className="row">
                    {
                        props.shoes.map((shoe, i) => {
                            return (
                                <Card key={shoe.id} shoes={shoe} i={i}></Card>
                            )
                        })
                    }
                </div>
            </div>
            {
                props.count !== 4
                    ? <button onClick={() => {
                        props.setCount(props.count + 1);
                        axios.get(`https://codingapple1.github.io/shop/data${props.count}.json`)
                            .then((res) => {
                                console.log(res.data);
                                let copy = [...props.shoes, ...res.data];
                                props.setShoes(copy);
                            })
                            .catch(() => {
                                console.log('실패함')
                            })
                    }}>더보기</button>
                    : null
            }
        </div>
    )
}

function Card(props) {

    let navigate = useNavigate();

    function goToDetail() {
        navigate('/detail/' + props.shoes.id); // 여기서 props.shoes.id는 각 신발의 고유 ID를 가리킵니다.
    }

    return (
        <div className="col-md-4">
            <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
                 width="80%"
                 onClick={goToDetail}
                style={{cursor : 'pointer'}}/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price} won</p>
        </div>
    )
}

export default App;
