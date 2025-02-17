import React from 'react';
import ButtonAction from '@/components/ButtonAction';

function BlogDetailPage() {
	return (
		<div>
			<div className="mb-8">
				<h2 className="text-2xl font-bold my-2">Post One</h2>
			</div>
			<p className="text-slate-700">Post Content</p>
			<ButtonAction />
		</div>
	);
}

export default BlogDetailPage;
