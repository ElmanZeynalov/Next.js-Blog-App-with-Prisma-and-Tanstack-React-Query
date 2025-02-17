import React from 'react';
import ButtonAction from '@/components/ButtonAction';
import BackButton from '@/components/BackButton';

function BlogDetailPage() {
	return (
		<div>
			<BackButton />
			<div className="mb-8">
				<h2 className="text-2xl font-bold my-2">Post One</h2>
			</div>
			<p className="text-slate-700">Post Content</p>
			<ButtonAction />
		</div>
	);
}

export default BlogDetailPage;
