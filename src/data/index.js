export const data = {
	id: '0',
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
				},
				{
					id: '9',
					name: 'main.cpp',
					type: 'cpp',
					parentID: '1',
				},
				{
					id: '7',
					name: 'base.jsx',
					type: 'jsx',
					parentID: '1',
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
				},
				{
					id: '5',
					name: 'index.js',
					type: 'js',
					parentID: '3',
				},
				{
					id: '6',
					name: 'main.css',
					type: 'css',
					parentID: '3',
				},
				{
					id: '7',
					name: 'base.scss',
					type: 'scss',
					parentID: '3',
				},
			],
		},
	],
};
