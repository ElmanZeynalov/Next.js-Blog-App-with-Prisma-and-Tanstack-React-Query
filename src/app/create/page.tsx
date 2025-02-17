'use client';
import React from 'react';
import FormPost from '@/components/FormPost';
import { SubmitHandler } from 'react-hook-form';
import { FormInputPost } from '@/types';
import BackButton from '@/components/BackButton';

function CreatPage() {
	const handleCreatPost: SubmitHandler<FormInputPost> = (data) => {
		console.log(data);
	};

	return (
		<div>
			<BackButton />
			<h1 className="text-2xl my-4 font-bold text-center">Add New Post</h1>
			<FormPost submit={handleCreatPost} isEditing={false} />
		</div>
	);
}

export default CreatPage;
