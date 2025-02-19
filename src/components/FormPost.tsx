'use client';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputPost } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Tag } from '@prisma/client';
import Loading from '@/components/Loading';

interface FormPostProps {
	submit: SubmitHandler<FormInputPost>;
	isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
	const { register, handleSubmit } = useForm<FormInputPost>();

	//fetch list tags

	const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
		queryKey: ['tags'],
		queryFn: async () => {
			const response = await axios.get('api/tags');
			return response.data;
		},
	});
	console.log('datatags', dataTags);

	return (
		<form onSubmit={handleSubmit(submit)} className="flex flex-col items-center justify-center gap-5 mt-10">
			<input
				{...register('title', { required: true })}
				type="text"
				placeholder="Post title..."
				className="input input-bordered w-full max-w-lg"
			/>

			<textarea
				{...register('content', { required: true })}
				className="textarea textarea-bordered w-full max-w-lg"
				placeholder="Post content..."
			></textarea>

			{isLoadingTags ? (
				<Loading />
			) : (
				<select
					defaultValue={' '}
					{...register('tags', { required: true })}
					className="select select-bordered w-full max-w-lg"
				>
					{dataTags?.map((tag) => (
						<option key={tag.id} value={tag.id}>
							{tag.name}
						</option>
					))}
				</select>
			)}

			<button type="submit" className="btn btn-primary w-full max-w-lg rounded-md">
				{isEditing ? 'Update' : 'Create'}
			</button>
		</form>
	);
};

export default FormPost;
