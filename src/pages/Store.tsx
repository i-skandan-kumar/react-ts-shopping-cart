import storeItems from "../data/items.json"
import { Col, Row } from "react-bootstrap"

export default function Store(){
    return (
    <>
        <h1>Store</h1>
        <Row>
            {storeItems.map(item => (
                <Col>{JSON.stringify(item)}</Col>
        ) )}
    </Row>
    </>
    )
}