'use client';
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

function BackButton() {
	const router = useRouter();

	return (
		<button className="btn" onClick={() => router.back()}>
			<ChevronLeft />
			Back
		</button>
	);
}

export default BackButton;
