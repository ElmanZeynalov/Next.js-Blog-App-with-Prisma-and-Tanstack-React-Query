import React from 'react';
import ButtonAction from '@/components/ButtonAction';
import BackButton from '@/components/BackButton';
import { db } from '@/lib/db';

interface BlogDetailPageProps {
	params: {
		id: string;
	};
}

async function getPost(id: string) {
	const response = await db.post.findFirst({
		where: {
			id: id,
		},
		select: {
			id: true,
			title: true,
			content: true,
			Tag: true,
		},
	});
	return response;
}

async function BlogDetailPage({ params }: BlogDetailPageProps) {
	console.log('params', params.id);

	const post = await getPost(params.id);
	// console.log('posts', posts);

	return (
		<div>
			<BackButton />
			<div className="mb-8">
				<h2 className="text-2xl font-bold my-2">{post?.title}</h2>
			</div>
			<span className="badge badge-accent">{post?.Tag.name}</span>
			<p className="text-slate-700">{post?.content}</p>
			<ButtonAction id={params.id} />
		</div>
	);
}

export default BlogDetailPage;
