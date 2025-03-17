import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Pagination, Accordion, Container } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

export default function Index() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(`https://listing-api-web422.vercel.app/api/listings/?page=${page}&perPage=10`);
  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) 
    setPage(page - 1);
  };

  const next = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <PageHeader text= "Browse Listings : Sorted by Number of Ratings" />
      <Accordion>
        {pageData.map((listing) => (
          <Accordion.Item eventKey={listing._id} key={listing._id}>
            <Accordion.Header>
              <strong>{listing.name}</strong> - {listing.address.street}
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item> 
        <Pagination.Next onClick={next} />
      </Pagination>
    </Container>
  );
}


