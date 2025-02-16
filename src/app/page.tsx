import PostCard from '@/components/PostCard';

export default function Home() {
	return (
		<div className='grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6'>
<PostCard/>
			<PostCard/>
		</div>
	);
}
