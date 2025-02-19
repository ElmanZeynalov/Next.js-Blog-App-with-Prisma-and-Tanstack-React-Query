import React from 'react';
import Link from 'next/link';

interface PostCardProps {
	post: {
		id: string | number;
		title: string;
		content: string;
		Tag: { name: string; id: string | number };
	};
}

function PostCard({ post }: PostCardProps) {
	const { title, content, Tag } = post;

	console.log(post);
	return (
		<div className="card bg-base-100 w-full shadow-xl border">
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{content}</p>
				<div className="card-actions justify-end">
					<div className="badge badge-accent">{Tag.name}</div>
					<Link href={`/blog/${post.id}`} className="hover:underline">
						Read more...
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PostCard;
