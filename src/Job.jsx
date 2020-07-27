import React, { useState } from 'react';
import { 
    Card, 
    Badge, 
    Button, 
    Collapse
} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

export default function Job({ job }) {
    const [open, setOpen] = useState(false);

    return (
        <Card className="mb-3">
            {/* 'mb-3' equals to margin-bottom */}
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted-mb2">
                            {/* 'toLocaleDateString' is used to show Date in local time */}
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        {/* 'mr-2' acts like margin-right */}
                        <Badge variant="secondary" className="mr-2">{job.type}</Badge>
                        <Badge variant="secondary">{job.location}</Badge>
                        <div style={{ wordBreak: 'break-all' }}>
                            <ReactMarkdown source={job.how_to_apply} />
                        </div>
                    </div>
                    {/*
                      * 'd-none' means the image (company logo) will not be shown all the time.
                      * 'd-md-block' means if the screen size is medium or larger, then show the image (company logo). 
                      */}
                    <img 
                        className="d-none d-md-block" 
                        height="50" 
                        src={job.company_logo} 
                        alt={job.company} 
                    />
                </div>
                <Card.Text>
                    <Button
                        onClick={() => setOpen(prevOpen => !prevOpen)}
                        variant='primary'
                    >
                        {open ? 'Hide Details' : 'View Details'}
                    </Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className='mt-4'>
                        <ReactMarkdown source={job.description} />
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    );
}
