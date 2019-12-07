import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<Link to="/" className="btn btn-light">
				Back to Search
			</Link>
			<h1>Not Found</h1>
			<p className="lead">The page you seek doesn't exist...</p>
		</div>
	);
};

export default NotFound;
