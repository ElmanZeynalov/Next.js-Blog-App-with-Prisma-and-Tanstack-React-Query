import PostCard from '@/components/PostCard';
import { db } from '@/lib/db';

async function getPost() {
	const response = await db.post.findMany({
		select: {
			id: true,
			title: true,
			content: true,
			Tag: true,
		},
		orderBy: {
			createdAt: 'desc',
		},
	});
	// console.log(response);
	return response;
}

export default async function Home() {
	const posts = await getPost();

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 mt-10 px-4 md:px-8">
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	);
}
