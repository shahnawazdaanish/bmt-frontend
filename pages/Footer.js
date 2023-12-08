import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

// @mui/icons-material
// core components
import styles from '/styles/jss/nextjs-material-kit-pro/components/footerStyle.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import classNames from 'classnames';

const useStyles = makeStyles(styles);

export default function Footer (props) {
	const classes = useStyles();
	const { children, content, theme, big, className } = props;
	const themeType =
		theme === "transparent" || theme == undefined ? false : true;
	const footerClasses = classNames({
		[classes.footer]: true,
		[classes[theme]]: themeType,
		[classes.big]: big || children !== undefined,
		[className]: className !== undefined
	});
	const aClasses = classNames({
		[classes.a]: true
	});

	return (
		<footer className={footerClasses}>
			<div className={classes.container}>
				<div>
					<div className={classes.left}>
						<List className={classes.list}>
							<ListItem className={classes.inlineBlock}>
								<a
									href=""
									className={classes.block}
								>
									Home
								</a>
							</ListItem>
						</List>
					</div>
					<div className={classes.right}>
						&copy; {1900 + new Date().getYear()} , made by{' '}
						Team Aurora
					</div>
				</div>
				<div className={classes.clearFix}/>
			</div>
		</footer>
	);
}
