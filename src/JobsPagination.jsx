import React from 'react';
import { Pagination } from 'react-bootstrap';

export default function JobsPagination({ page, setPage, hasNextPage }) {
    function adjustPage(amount) {
        setPage(prevPage => prevPage + amount);
    }
    
    return (
        <Pagination>
            {/* If not Page 1, not showing previous arrow button  */}
            { page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} /> }
            { page !== 1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item> }
            {/* If Page > 2, showing '...' button which is called Elipsis  */}
            { page > 2 && <Pagination.Ellipsis /> }
            { page > 2 && <Pagination.Item onClick={() => adjustPage(-1)}>{ page - 1 }</Pagination.Item> }
            {/* If Page is active, apply 'active' prop to change style to the page number  */}
            <Pagination.Item active>{ page }</Pagination.Item>
            {/* If next page exists, move to next page  */}
            { hasNextPage && <Pagination.Item onClick={() => adjustPage(1)}>{ page + 1 }</Pagination.Item> }
            {/* If next page exists, show next arrow button  */}
            { hasNextPage && <Pagination.Next onClick={() => adjustPage(1)} /> }
        </Pagination>
    );
}
