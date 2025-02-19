import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const body = await req.json();
		// console.log(body);
		const post = await db.post.create({
			data: {
				title: body.title,
				content: body.content,
				tagId: body.tags,
			},
		});
		// console.log(tags);
		return NextResponse.json(post, { status: 200 });
	} catch (error) {
		return NextResponse.json({ massage: 'not creat post' }, { status: 500 });
	}
}
