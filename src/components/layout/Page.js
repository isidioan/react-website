import React from 'react'
import PropTypes from 'prop-types';

function Page(props) {


    React.useEffect(() => {
        document.title = props.title;
    }, [props.title]);
    return props.children;



}
Page.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Page;