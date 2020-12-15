import React, { useContext } from 'react';
import { IconButton, makeStyles, Paper, Typography } from '@material-ui/core';

import { VscNewFile, VscNewFolder, VscRefresh } from 'react-icons/vsc';

import { FileManagerContext } from '../context/FileManagerContext';

import { types } from '../context/actions/index';
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles((theme) => ({
	menuItem: {
		backgroundColor: '#252526',
		padding: theme.spacing(1.5),
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

const MenuItem = ({ parentID }) => {
	const classes = useStyles();
	const { changeFiles } = useContext(FileManagerContext);
	
	const addNewFile = () => {
		const newFile = {
			id: uuid(),
			type: 'newFile',
			parentID: parentID,
			iconType:'file'
		};

		changeFiles({ type: types.addInput, parentID, newFile });
	};

	return (
		<Paper square className={classes.menuItem}>
			<Typography className={classes.titleBox} variant='body1'>
				Explorer
			</Typography>
			<div>
				<IconButton className={classes.icon} onClick={addNewFile}>
					<VscNewFile />
				</IconButton>
				<IconButton className={classes.icon}>
					<VscNewFolder />
				</IconButton>
				<IconButton className={classes.icon}>
					<VscRefresh />
				</IconButton>
			</div>
		</Paper>
	);
};

export default MenuItem;
