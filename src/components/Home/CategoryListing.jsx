// @flow 
import React from 'react';

export const CategoryListing = ({ match }) => {
    return (
        <div>
            <h6>Category content for {match.params.id} will go here</h6>
        </div>
    );
};