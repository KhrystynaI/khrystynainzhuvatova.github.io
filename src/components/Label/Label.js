import React from 'react';
import PropTypes from 'prop-types';

/**
*there are default properties
*/
export default function Label({ color, background, children }) {
	const styles = {
		color,
		background,
		padding: '.5em 1em',
		borderRadius: '0.3em',
		fontFamily: 'arial',
	};

	// eslint-disable-next-line jsx-a11y/label-has-for
	return <label style={styles}>{children}</label>;
}
Label.propTypes = {
	/**
	 * Label text.
	 */
	children: PropTypes.string.isRequired,
	color: PropTypes.string,/**
	* you can choose color to add string in properties
	*/
	background: PropTypes.string,
};
Label.defaultProps = {
	color: '#333',
	background: 'white',
};
