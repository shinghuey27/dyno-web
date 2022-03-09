import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';

const TableContainer = forwardRef((props, ref) => {

    return (
        <div ref={ref} {...props} />)
});



TableContainer.propTypes = {    
    /**
      * The content of the component, normally `Table`.
      */
    children: PropTypes.node,
}

export default TableContainer;
