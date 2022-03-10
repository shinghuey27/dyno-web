import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';

const ListItem = forwardRef((props, ref) => {

    return (            
        <li ref={ref} {...props} />
    )
});



ListItem.propTypes = {
    /**
      * The content of the component.
      */
    children: PropTypes.node,
}

export default ListItem;
