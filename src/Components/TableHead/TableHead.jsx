import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';

const TableHead = forwardRef((props, ref) => {

    return (
        <thead ref={ref} {...props} />)
});



TableHead.propTypes = {
    /**
     * The content of the component, normally `TableRow`.
     */
    children: PropTypes.node,
}

export default TableHead;
