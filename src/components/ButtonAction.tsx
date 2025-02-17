import React from 'react';
import Link from 'next/link';
import { PencilLine, Trash2 } from 'lucide-react';

function ButtonAction() {
	return (
		<div>
			<Link href="/edit/id" className="btn mr-2">
				<PencilLine /> Edit
			</Link>

			<button className="btn btn-error">
				<Trash2 />
				Delete
			</button>
		</div>
	);
}

export default ButtonAction;
