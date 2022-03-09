import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';

const TableRow = forwardRef((props, ref) => {

    return (
        <tr ref={ref} {...props} />)
});



TableRow.propTypes = {
    /**
     * Should be valid <tr> children such as `TableCell`.
     */
    children: PropTypes.node,
}

export default TableRow;
