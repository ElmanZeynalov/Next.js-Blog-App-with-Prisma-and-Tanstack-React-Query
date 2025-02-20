import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

interface ContextProps {
	params: {
		postId: string;
	};
}

export async function DELETE(req: Request, context: ContextProps) {
	try {
		const { params } = context;
		// console.log('isjaskjskjjksa', params);
		await db.post.delete({
			where: {
				id: params.postId,
			},
		});
		// console.log(tags);
		return new Response(null, { status: 200 });
	} catch (error) {
		return NextResponse.json({ massage: 'not delete post' }, { status: 500 });
	}
}

export async function PATCH(req: Request, context: ContextProps) {
	try {
		const { params } = context;
		// console.log('isjaskjskjjksa', params);

		const body = await req.json();
		await db.post.update({
			where: {
				id: params.postId,
			},
			data: {
				title: body.title,
				content: body.content,
				tagId: body.tagId,
			},
		});
		// console.log(tags);
		return NextResponse.json({ massage: 'update success' }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ massage: 'not delete post' }, { status: 500 });
	}
}

export async function GET(req: Request, context: ContextProps) {
	try {
		const { params } = context;
		const post = await db.post.findFirst({
			where: {
				id: params.postId,
			},
			include: {
				Tag: true,
			},
		});
		// console.log('post', post);
		return NextResponse.json(post, { status: 200 });
	} catch (error) {
		return NextResponse.json({ massage: 'not fetch' }, { status: 500 });
	}
}
