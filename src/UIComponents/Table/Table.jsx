import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';

const Table = forwardRef((props, ref) => {

    return (
        <table ref={ref} {...props} />)
});



Table.propTypes = {    
  /**
  * The content of the table, normally `TableHead` and `TableBody`.
  */
    children: PropTypes.node,
}

export default Table;
