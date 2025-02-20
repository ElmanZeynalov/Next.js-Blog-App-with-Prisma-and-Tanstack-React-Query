'use client';
import React from 'react';
import Link from 'next/link';
import { PencilLine, Trash2 } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface ButtonActionProps {
	id: string;
}

function ButtonAction({ id }: ButtonActionProps) {
	const router = useRouter();
	const { mutate: deletePost } = useMutation({
		mutationFn: () => {
			return axios.delete(`/api/posts/${id}`);
		},
		onError: (error) => {
			console.log(error);
		},
		onSuccess: () => {
			toast.success('Post Deleted successfully!');
			router.push('/');
			router.refresh();
		},
	});
	return (
		<div>
			<Link href={`/edit/${id}`} className="btn mr-2">
				<PencilLine /> Edit
			</Link>

			<button
				onClick={() => {
					deletePost();
				}}
				className="btn btn-error"
			>
				<Trash2 />
				Delete
			</button>
		</div>
	);
}

export default ButtonAction;
