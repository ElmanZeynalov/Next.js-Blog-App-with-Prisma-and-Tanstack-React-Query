import PostCard from '@/components/PostCard';

export default function Home() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 mt-10 px-4 md:px-8">
			<PostCard />
			<PostCard />
			<PostCard />
		</div>
	);
}
