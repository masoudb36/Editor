import { types } from '../actions/index';

export default function filesReducer(files, action) {
	switch (action.type) {
		case types.addFile:
			console.log(action.parentID);
			findFile(files, action);
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
	if (nodes.parentID === action.parentIDid) {
		nodes.newFile = action.newFile;
	} else {
		Array.isArray(nodes.children) &&
			nodes.children.map((node) => findFile(node, action));
	}
}
