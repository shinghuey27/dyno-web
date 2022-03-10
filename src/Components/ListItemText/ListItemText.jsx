import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';

const ListItemText = forwardRef((props, ref) => {

    return (            
        <span ref={ref} {...props} />
    )
});



ListItemText.propTypes = {
    /**
      * The content of the component.
      */
    children: PropTypes.node,
}

export default ListItemText;
