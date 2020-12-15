import { types } from '../actions/index';

export default function filesReducer(files, action) {
	switch (action.type) {
		case types.addInput:
			findFile(files, action);
			return { ...files };
		case types.addFile:
			return { ...files };
		case types.addFolder:
			return { ...files };
		case types.refresh:
			return { ...files };
		case types.delete:
			return { ...files };
		default:
			return { ...files };
	}
}

function findFile(nodes, action) {
	if (nodes.id === action.parentID) {
		nodes.children = [action.newFile, ...nodes.children];
		console.log(nodes);
	} else {
		Array.isArray(nodes.children) &&
			nodes.children.map((node) => findFile(node, action));
	}
}
