import Card from 'react-bootstrap/Card';
export default function PageHeader({text}) {
    return (
        <>
            <Card className="bg-light">
                <Card.Body>{text}</Card.Body>
            </Card>
            <br />
        </>
        
    );
}
  