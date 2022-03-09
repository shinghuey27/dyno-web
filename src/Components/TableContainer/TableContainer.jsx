import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';
import styles from "./TableContainer.module.scss";


const TableContainer = forwardRef((props, ref) => {

    return (            
        <div ref={ref} className={styles['table-container-dyno']} {...props} />
    )
});



TableContainer.propTypes = {
    /**
      * The content of the component, normally `Table`.
      */
    children: PropTypes.node,
}

export default TableContainer;
