import React from 'react';
import Link from 'next/link';

function ButtonAction() {
	return (
		<div>
			<Link href='/edit/id' className='btn mr-2'>Edit</Link>
			<button className='btn btn-error'>Delete</button>
		</div>
	);
}

export default ButtonAction;