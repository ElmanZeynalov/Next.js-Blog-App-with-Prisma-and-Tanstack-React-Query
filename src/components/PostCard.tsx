import React from 'react';
import Link from 'next/link';

function PostCard() {
	return (
		<div className="card bg-base-100 w-96 shadow-xl border">
			<div className="card-body">
				<h2 className="card-title">Card title!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<Link href="/blog" className='hover:underline'>Read more...</Link>
				</div>
			</div>
		</div>
	);
}

export default PostCard;