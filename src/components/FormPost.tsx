'use client'
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputPost } from '@/types';

interface FormPostProps {
	submit: SubmitHandler<FormInputPost>
}

const FormPost: FC<FormPostProps> =({submit})=> {

	const {register, handleSubmit}=useForm<FormInputPost>();

	// const submit = (data)=>console.log(data);

	return (
		<form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-6 mt-10'>
			<input {...register("title",{required:true})} type="text" placeholder="Post title..." className="input input-bordered w-full max-w-lg" />


			<textarea {...register("content",{required:true})} className="textarea textarea-bordered w-full max-w-lg" placeholder="Post content..."></textarea>


			<select defaultValue={"Select"} {...register("tags",{required:true})} className="select select-bordered w-full max-w-lg">

				<option>JavaSciprt</option>
				<option>HTML</option>
				<option>CSS</option>
			</select>
			<button type='submit' className='btn btn-primary w-full max-w-lg rounded-md'>Creat</button>
		</form>
	);
}

export default FormPost;