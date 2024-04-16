import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'

function App() {

    let [shoes] = useState(data)
    let navigate = useNavigate()

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
                </Nav>
            </Container>
        </Navbar>

        <Routes>
            <Route path="/" element={<Home shoes={shoes} />}/>
            <Route path="/detail/:id" element={<Detail shoes={shoes} />}/>
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
