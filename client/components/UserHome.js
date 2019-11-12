import React from 'react';

const UserHome = (props) => {
	return (
		<div id="user-home-container">
			<h1>Welcome {props.user.email}</h1>
		</div>
	);
};

export default UserHome;
