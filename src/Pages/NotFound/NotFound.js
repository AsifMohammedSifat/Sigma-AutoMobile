import React from 'react';

const NotFound = () => {
    return (
        <div className="text-center mx-auto">
            <div style = { {marginTop: "90px" } }>
                {/* not found text and also gif added  */}
                <h1 className="text-danger w-50 m-auto rounded-3 mt-5 bg-warning">Sorry!!No Result Found</h1>
                <img className="w-75 img-fluid" src="https://www.worldwidejournals.com/paripex/images/404-error.gif" alt="" />
            </div>
            
        </div>
    );
};

export default NotFound;