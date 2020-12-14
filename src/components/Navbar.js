import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { BiCodeCurly } from 'react-icons/bi';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		'&>header': {
			backgroundColor: '#323233',
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	logo: {
		color: '#23a7f2',
		fontSize: 30,
		marginRight: 10,
	},
}));

export default function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<BiCodeCurly className={classes.logo} />
					<Typography variant='h6' className={classes.title}>
						SM2.IDE
					</Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
