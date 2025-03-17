import Link from "next/link";
import Card from "react-bootstrap/Card";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export default function About({ listing }) {
    return (
    <>
      <PageHeader text="About the Developer: Alejandra Pereira Leon" />
        <Card className="bg-light">
            <Card.Body>
                <p>
                    Hello! I’m Alejandra Pereira Leon, a developer passionate about 
                    web design and application optimization. I love working with React, Next.js, 
                    and modern technologies to create dynamic and efficient experiences.
                </p>
                <p>
                  A Fantastic apartment in Portugal, the <Link href={`/listing/${listing._id}`}>Ribeira Charming Duplex</Link>.
                </p>
            </Card.Body>
        </Card>
      <ListingDetails listing={listing} />

    </>
    );
}

export function getStaticProps() {
  const listingId = "10006546"; 

  return new Promise((resolve, reject) => {
      fetch(`https://listing-api-web422.vercel.app/api/listings/${listingId}`)
          .then(res => res.json())
          .then(data => {
              resolve({ props: { listing: data } });
          })
          .catch(error => reject(error));
  });
}
