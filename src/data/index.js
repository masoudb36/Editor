export const data = {
	id: 'root',
	name: 'Project',
	type: 'folder',
	children: [
		{
			id: '1',
			name: 'node_modules',
			type: 'folder',
			parentId: '0',
			children: [
				{
					id: '8',
					name: 'index.html',
					type: 'htm',
					parentId: '1',
					code:'index.html'

				},
				{
					id: '9',
					name: 'main.cpp',
					type: 'cpp',
					parentId: '1',
					code:'main.cpp'

				},
				{
					id: '7',
					name: 'base.jsx',
					type: 'jsx',
					parentId: '1',
					code:'base.jsx'
				},
			],
		},
		{
			id: '3',
			name: 'public',
			type: 'folder',
			parentId: '0',
			children: [
				{
					id: '4',
					name: 'Components',
					type: 'folder',
					parentId: '3',
					children: [],
				},
				{
					id: '5',
					name: 'index.js',
					type: 'js',
					parentId: '3',
					code:'index.js'

				},
				{
					id: '6',
					name: 'main.css',
					type: 'css',
					parentId: '3',
					code:'main.css'

				},
				{
					id: '7',
					name: 'base.scss',
					type: 'scss',
					parentId: '3',
					code:'base.scss'

				},
			],
		},
	],
};
