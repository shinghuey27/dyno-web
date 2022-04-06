import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';

const TableCell = forwardRef((props, ref) => {

    return (
        <td ref={ref} {...props} />)
});



TableCell.propTypes = {    
    /**
   * The content of the component.
   */
    children: PropTypes.node,
}

export default TableCell;
