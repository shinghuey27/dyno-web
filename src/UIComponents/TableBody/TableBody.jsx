import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';

const TableBody = forwardRef((props, ref) => {

    return (
        <tbody ref={ref} {...props} />)
});



TableBody.propTypes = {    
  /**
   * The content of the component, normally `TableRow`.
   */
    children: PropTypes.node,
}

export default TableBody;
