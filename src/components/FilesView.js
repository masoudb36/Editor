import React, { useContext } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { TreeItem, TreeView } from '@material-ui/lab';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';
import { importImg } from '../tools';
import NewFile from './NewFile';
import { FileManagerContext } from '../context/FileManagerContext';
import { SelectedFileContext } from '../context/SelectedFileContext';
import { ParentIdContext } from '../context/ParentIdContext';
import { types } from '../context/actions';



const useStyles = makeStyles((theme) => ({
    fileRoot: {
		
	},
	labelWrap: {
		display: 'flex',
		alignItems: 'center',
		'&>svg': {
			fontSize: 20,
		},
	},
	labelText: {
		marginLeft: 8,
		fontWeight: '100',
		lineHeight: '2',
	},
	icon: {
		width: 20,
	},
}));


const FilesView = () => {
    const classes=useStyles();
	const { files } = useContext(FileManagerContext);
	const { changeSelectedFile } = useContext(SelectedFileContext);
	const { changeParent } = useContext(ParentIdContext);

	// const [parentID, setParentID] = useState('root');

	const selectFile = (node) => {
		if (node.type === 'folder') {
			changeParent(node.id);
		} else {
			changeParent(node.parentID);
			changeSelectedFile({type:types.openFile,node});
		}
	};

	const renderTree = (nodes) => (
		<TreeItem
			onClick={() => selectFile(nodes)}
			key={nodes.id}
			nodeId={nodes.id}
			label={
				nodes.id === '0' ? (
					<NewFile iconType={nodes.type}  />
				) : (
					<div className={classes.labelWrap}>
						<img
							className={classes.icon}
							src={importImg(nodes.type, nodes.name)}
							alt={nodes.name}
						/>
						<Typography variant='body2' className={classes.labelText}>
							{nodes.name}
						</Typography>
					</div>
				)
			}>
			{Array.isArray(nodes.children)
				? nodes.children.map((node) => renderTree(node))
				: null}
		</TreeItem>
	);
	return (
		<TreeView
			className={classes.fileRoot}
			defaultCollapseIcon={<VscChevronDown />}
			defaultExpanded={['root']}
			defaultExpandIcon={<VscChevronRight />}>
			{renderTree(files)}
		</TreeView>
	);
};

export default FilesView;
