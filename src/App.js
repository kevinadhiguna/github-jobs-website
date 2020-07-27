import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
// useFetchJobs acts like a custom hook
import useFetchJobs from './useFetchJobs';
import Job from './Job';
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
  
  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    // If we search something, obviously we need to go back to Page 1
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">Github Jobs</h1>
      <SearchForm 
        params={params} 
        onParamChange={handleParamChange} 
      />
      <JobsPagination 
        page={page} 
        setPage={setPage} 
        hasNextPage={hasNextPage} 
      />
      {/* If loading, then show 'Loading...' */}
      {loading && <h1>Loading...</h1>}
      {/* If error, then show 'Error... Try Refreshing' */}
      {error &&  <h1>Error.. Try Refreshing:)</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <JobsPagination 
        page={page} 
        setPage={setPage} 
        hasNextPage={hasNextPage}
      />
    </Container>
  );
}

export default App;
