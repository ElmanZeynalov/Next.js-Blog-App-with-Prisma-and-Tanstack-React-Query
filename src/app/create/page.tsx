'use client';
import React from 'react';
import FormPost from '@/components/FormPost';
import { SubmitHandler } from 'react-hook-form';
import { FormInputPost } from '@/types';
import BackButton from '@/components/BackButton';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

function CreatePage() {
	const router = useRouter();

	const { mutate: createPost } = useMutation({
		mutationFn: (newPost: FormInputPost) => axios.post('/api/posts/create', newPost),
		onError: (error) => {
			console.error(error);
			toast.error('Failed to tags posts. Please try again.');
		},
		onSuccess: () => {
			toast.success('Post created successfully!');
			router.push('/');
		},
	});

	const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
		createPost(data);
	};

	return (
		<div>
			<BackButton />
			<h1 className="text-2xl my-4 font-bold text-center">Add New Post</h1>
			<FormPost submit={handleCreatePost} isEditing={false} />
		</div>
	);
}

export default CreatePage;
