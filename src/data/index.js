export const data = {
	id: 'root',
	name: 'Project',
	type: 'dir',
	children: [
		{
			id: '1',
			name: 'node-modules',
			type: 'dir',
			parentID: '0',
			children: [
				{
					id: '8',
					name: 'index.html',
					type: 'html',
					parentID: '1',
					code:'index.html'

				},
				{
					id: '9',
					name: 'main.cpp',
					type: 'cpp',
					parentID: '1',
					code:'main.cpp'

				},
				{
					id: '7',
					name: 'base.jsx',
					type: 'jsx',
					parentID: '1',
					code:'base.jsx'
				},
			],
		},
		{
			id: '3',
			name: 'public',
			type: 'dir',
			parentID: '0',
			children: [
				{
					id: '4',
					name: 'Components',
					type: 'dir',
					parentID: '3',
					children: [],
				},
				{
					id: '5',
					name: 'index.js',
					type: 'js',
					parentID: '3',
					code:'index.js'

				},
				{
					id: '6',
					name: 'main.css',
					type: 'css',
					parentID: '3',
					code:'main.css'

				},
				{
					id: '7',
					name: 'base.scss',
					type: 'scss',
					parentID: '3',
					code:'base.scss'

				},
			],
		},
	],
};
