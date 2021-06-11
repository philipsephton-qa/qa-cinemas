import { useState } from "react";
import { Form, Button, Col, Modal } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import Seating from '../Seating/Seating'

const BookTickets = (props) => {

    // const {screeningDate, screeningTime, movieTitle} = props.location.state;
    const screeningDate = "abc";
    const screeningTime = "16:00";
    const movieTitle = "abc";
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const adultTicketPrice = 8;
    const childTicketPrice = 4;
    const seniorTicketPrice = 6;

    const [adultTickets, setAdultTickets] = useState(0);
    const [adultTicketsCost, setAdultTicketsCost] = useState(0);
    const [childTickets, setChildTickets] = useState(0);
    const [childTicketsCost, setChildTicketsCost] = useState(0);
    const [seniorTickets, setSeniorTickets] = useState(0);
    const [seniorTicketsCost, setSeniorTicketsCost] = useState(0);
    const [totalTickets, setTotalTickets] = useState(0);
    const [totalTicketsPrice, setTotalTicketsPrice] = useState(0);

    const adultTicketUpdate = (e) => {
        setAdultTickets(e.target.value);
        setTotalTickets(e.target.value + childTickets + seniorTickets);
        setAdultTicketsCost(e.target.value * adultTicketPrice);
        setTotalTicketsPrice(
            (e.target.value * adultTicketPrice) + childTicketsCost + seniorTicketsCost
        );
    };
    const childTicketUpdate = (e) => {
        setChildTickets(e.target.value);
        setTotalTickets(adultTickets + e.target.value + seniorTickets);
        setChildTicketsCost(e.target.value * childTicketPrice);
        setTotalTicketsPrice(
            adultTicketsCost + (e.target.value * childTicketPrice) + seniorTicketsCost
        );
    };
    const seniorTicketUpdate = (e) => {
        setSeniorTickets(e.target.value);
        setTotalTickets(adultTickets + childTickets + e.target.value);
        setSeniorTicketsCost(e.target.value * seniorTicketPrice);
        setTotalTicketsPrice(
            adultTicketsCost + childTicketsCost + (e.target.value * seniorTicketPrice)
        );
    };

    return (
        <Form>
            <Form.Group as={Col} controlId="adultTickets">
                <Form.Label>Adult Tickets</Form.Label>
                <Form.Control
                    value={adultTickets}
                    onChange={(e) => adultTicketUpdate(e)}
                    as="select"
                >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="childTickets">
                <Form.Label>Child Tickets</Form.Label>
                <Form.Control
                    value={childTickets}
                    onChange={(e) => childTicketUpdate(e)}
                    as="select"
                >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="seniorTickets">
                <Form.Label>Senior Tickets</Form.Label>
                <Form.Control
                    value={seniorTickets}
                    onChange={(e) => seniorTicketUpdate(e)}
                    as="select"
                >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                </Form.Control>
            </Form.Group>

            <Link
                to={{
                    pathname: "/Payments",
                    state: { totalTicketsPrice }
                }}>
                <Button variant="outline-danger">Go To Checkout</Button>
            </Link>

            <p>Movie Title: {movieTitle}</p>
            <p>
                Screening date and time: {screeningDate}, {screeningTime}
            </p>
            <p>Total tickets: {totalTickets}</p>
            <p>Total tickets cost: £{totalTicketsPrice}</p>
            <Seating />
        </Form>
    );
};

export default BookTickets;