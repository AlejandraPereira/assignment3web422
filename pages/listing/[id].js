import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import Error from 'next/error'; 
import PageHeader from '@/components/PageHeader';

export default function Listing() {

    const { query } = useRouter();
    const { id } = query
    const { data, error, isLoading } = useSWR(`https://listing-api-web422.vercel.app/api/listings/${id}`);

    if (isLoading) {
        return null; 
    }
    
    // Handle error or invalid data
    if (error || !data || !data) {
        return <Error statusCode={404} />;
    }

    const listing = data;

    return (
        <div>
            <PageHeader text={listing.name} />
            <ListingDetails listing={listing} />
        </div>
    );
}

