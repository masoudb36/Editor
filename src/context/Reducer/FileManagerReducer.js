import { types } from '../actions/index';

export default function filesReducer(files, action) {
	switch (action.type) {
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
