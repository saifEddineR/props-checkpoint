import React from 'react';
import PropTypes from "prop-types";


const CompProfile = ({ fullName = 'name', bio = 'nothing serious', profession = 'Ceo', children }) => {
    return (
        <div className="profile">
            <h4 style={{ color: 'lightblue' }}> {fullName} </h4>
            <p>{bio}</p>
            <h5> {profession} </h5>
            {children}
        </div>
    )
}
CompProfile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}
export default CompProfile;
