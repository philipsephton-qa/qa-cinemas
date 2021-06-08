import { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Col, Row, Container, Alert, Button } from "react-bootstrap";


const Seating = () => {

    const totalTickets = 2;
    const [error, setError] = useState(false);
    const [value, setValue] = useState([]);
    const seats = [
        { id: 1, row: "A", number: 1, isSelected: false }, { id: 2, row: "A", number: 2, isSelected: false }, { id: 3, row: "A", number: 3, isSelected: false }, { id: 4, row: "A", number: 4, isSelected: false }, { id: 5, row: "A", number: 5, isSelected: false }, { id: 6, row: "A", number: 6, isSelected: false },
        { id: 7, row: "B", number: 1, isSelected: false }, { id: 8, row: "B", number: 2, isSelected: false }, { id: 9, row: "B", number: 3, isSelected: false }, { id: 10, row: "B", number: 4, isSelected: false }, { id: 11, row: "B", number: 5, isSelected: false }, { id: 12, row: "B", number: 6, isSelected: false },
        { id: 13, row: "C", number: 1, isSelected: false }, { id: 14, row: "C", number: 2, isSelected: false }, { id: 15, row: "C", number: 3, isSelected: false }, { id: 16, row: "C", number: 4, isSelected: false }, { id: 17, row: "C", number: 5, isSelected: false }, { id: 18, row: "C", number: 6, isSelected: false },
        { id: 19, row: "D", number: 1, isSelected: false }, { id: 20, row: "D", number: 2, isSelected: false }, { id: 21, row: "D", number: 3, isSelected: false }, { id: 22, row: "D", number: 4, isSelected: false }, { id: 23, row: "D", number: 5, isSelected: false }, { id: 24, row: "D", number: 6, isSelected: false },
        { id: 25, row: "E", number: 1, isSelected: false }, { id: 26, row: "E", number: 2, isSelected: false }, { id: 27, row: "E", number: 3, isSelected: false }, { id: 28, row: "E", number: 4, isSelected: false }, { id: 29, row: "E", number: 5, isSelected: false }, { id: 30, row: "E", number: 6, isSelected: false },
        { id: 31, row: "F", number: 1, isSelected: false }, { id: 32, row: "F", number: 2, isSelected: false }, { id: 33, row: "F", number: 3, isSelected: false }, { id: 34, row: "F", number: 4, isSelected: false }, { id: 35, row: "F", number: 5, isSelected: false }, { id: 36, row: "F", number: 6, isSelected: false },
        { id: 37, row: "G", number: 1, isSelected: false }, { id: 38, row: "G", number: 2, isSelected: false }, { id: 39, row: "G", number: 3, isSelected: false }, { id: 40, row: "G", number: 4, isSelected: false }, { id: 41, row: "G", number: 5, isSelected: false }, { id: 42, row: "G", number: 6, isSelected: false },
    ]

    const handleChange = (val) => {
        if (totalTickets > value.length) {
            setValue(val);
        } else if(totalTickets > val.length){
            setValue(val);
        } else {
            console.log(value.indexOf(val+","))
            console.log(value)
            console.log(val)
            setError(true);
        }


    }

    return (
        <Container>
            <Alert show={error} variant="danger">
                <Alert.Heading>Sorry!</Alert.Heading>
                <p>
                    You have tried selecting more seats than you ordered,<br /> please try deselcting some before you try to add more.
        </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setError(false)} variant="outline-success">
                        Close me y'all!
          </Button>
                </div>
            </Alert>
            <Row sm="18">
                <Col sm="3">
                    {seats.map((data) => (
                        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                            <ToggleButton value={data.id}>{data.row}{data.number}</ToggleButton>
                        </ToggleButtonGroup>
                    ))
                    }

                </Col>
            </Row>
        </Container >
    )


}
export default Seating;