import { types } from '../actions/index';

export default function filesReducer(files, action) {
	switch (action.type) {
		case types.addInput:
			addInput(files, action);
			return { ...files };
		case types.addFile:
			addFile(files, action);
			return { ...files };
		case types.addFolder:
			addFolder(files, action);
			return { ...files };
		case types.refresh:
			return { ...files };
		case types.removeInput:
			removeInput(files, action);
			return { ...files };
		default:
			return { ...files };
	}
}



function addInput(nodes, action) {
	if (nodes.id === action.parentID) {
		nodes.children = [action.newFile, ...nodes.children];
	} else {
		Array.isArray(nodes.children) &&
			nodes.children.map((node) => addInput(node, action));
	}
}

function addFile(nodes, action) {
	if (nodes.id === action.parentID) {
		nodes.children.shift();
		nodes.children = [...nodes.children, action.file];
	} else {
		Array.isArray(nodes.children) &&
			nodes.children.map((node) => addFile(node, action));
	}
}

function addFolder(nodes, action) {
	if (nodes.id === action.parentID) {
		nodes.children.shift();
		nodes.children = [action.file, ...nodes.children];
	} else {
		Array.isArray(nodes.children) &&
			nodes.children.map((node) => addFile(node, action));
	}
}

function removeInput(nodes, action) {
	if (nodes.id === action.parentID) {
		nodes.children.shift();
	} else {
		Array.isArray(nodes.children) &&
			nodes.children.map((node) => removeInput(node, action));
	}
}
