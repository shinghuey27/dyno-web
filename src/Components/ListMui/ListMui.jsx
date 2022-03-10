import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';

const ListMui = forwardRef((props, ref) => {

    return (            
        <ul ref={ref} {...props} />
    )
});



ListMui.propTypes = {
    /**
      * The content of the component.
      */
    children: PropTypes.node,
}

export default ListMui;
