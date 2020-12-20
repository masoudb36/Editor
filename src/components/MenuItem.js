import React, { useContext } from 'react';
import { IconButton, makeStyles, Paper, Typography } from '@material-ui/core';

import { VscNewFile, VscNewFolder, VscRefresh } from 'react-icons/vsc';

import { FileManagerContext } from '../context/FileManagerContext';
import { ParentIdContext } from '../context/ParentIdContext';

import { types } from '../context/actions/index';

const useStyles = makeStyles((theme) => ({
	menuItem: {
		backgroundColor: '#252526',
		padding: theme.spacing(0 ,1.5),
		borderColor: '#fff',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	titleBox: {
		color: '#eaa445',
	},
	icon: {
		color: '#fff',
		fontSize: 18,
		'&>svg': {
			marginLeft: 15,
		},
	},
}));

const MenuItem = () => {
	const classes = useStyles();
	const { changeFiles } = useContext(FileManagerContext);
	const { parentId } = useContext(ParentIdContext);
// console.log(parentId);
	const addInput = (type) => {
		const newFile = {
			id: '0',
			type: type,
			parentId: parentId,
		};

		changeFiles({ type: types.addInput, parentId, newFile });
	};

	const clickRefresh=()=>{
		changeFiles({ type: types.refresh });
	}

	return (
		<Paper square className={classes.menuItem}>
			<Typography className={classes.titleBox} variant='body1'>
				Explorer
			</Typography>
			<div>
				<IconButton className={classes.icon} onClick={()=>addInput('file')}>
					<VscNewFile />
				</IconButton>
				<IconButton className={classes.icon} onClick={()=>addInput('folder')}>
					<VscNewFolder />
				</IconButton>
				<IconButton className={classes.icon} onClick={clickRefresh}>
					<VscRefresh />
				</IconButton>
			</div>
		</Paper>
	);
};

export default MenuItem;
