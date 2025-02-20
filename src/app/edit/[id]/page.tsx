'use client';
import React, { use } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { FormInputPost } from '@/types';
import FormPost from '@/components/FormPost';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface EditPostProps {
	params: {
		id: string | number;
	};
}

function EditPostPage({ params }: EditPostProps) {
	const { id } = params;

	const router = useRouter();

	const { data: dataPost, isLoading: isLoadingPost } = useQuery({
		queryKey: ['posts', id],
		queryFn: async () => {
			const response = await axios.get(`/api/posts/${id}`, {});
			return response.data;
		},
	});

	const { mutate: updatePost } = useMutation({
		mutationFn: (newPost: FormInputPost) => axios.patch(`api/post/${id}`, newPost),
		onError: (error) => {
			console.error(error);
			toast.error('Failed to tags posts. Please try again.');
		},
		onSuccess: () => {
			toast.success('Post created successfully!');
			router.push('/');
		},
	});

	const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
		updatePost(data);
	};

	if (isLoadingPost) {
		return (
			<div className="text-center">
				<span className="loading loading-spinner loading-lg"></span>
			</div>
		);
	}

	return (
		<div>
			<h1 className="text-2xl my-4 font-bold text-center">Edit Post</h1>
			<FormPost submit={handleEditPost} initialValue={dataPost} isEditing />
		</div>
	);
}

export default EditPostPage;
