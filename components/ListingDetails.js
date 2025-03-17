import { Container, Row, Col } from "react-bootstrap";

export default function ListingDetails({ listing }) {
    return (
        <Container>
            <Row>
                <Col lg>
                <img
                    onError={(event) => {
                    event.target.onerror = null; // Remove the event handler to prevent infinite loop
                    event.target.src =
                        "https://placehold.co/600x400?text=Photo+Not+Available";
                    }}
                    className="img-fluid w-100"
                    src={listing.images.picture_url || ''}
                    alt="Listing Image"
                />
                <br />
                <br />

                </Col>
                <Col lg>
                        <p>
                            <strong>Neighbourhood Overview:</strong> {listing.neighborhood_overview}
                        </p>
                        <br /><br /><strong>Price:</strong> ${listing.price?.$numberDecimal|| "Not available"}<br />
                        <strong>Room Type:</strong> {listing.room_type || "Not specified"}<br />
                        <strong>Bed Type:</strong> {listing.bed_type|| "Not specified"}<br />
                        <strong>Number of Beds:</strong> {listing.beds} <br />
                        <strong>Rating:</strong> {listing.review_scores?.review_scores_rating || "N/A"}/100 ({listing.number_of_reviews || "0"} Reviews)
                        <br />
                        <br />
                </Col>
            </Row>
        </Container>
    )
}
  