import React from 'react';


class AngularPage extends React.Component {
    render(){
        console.log("angular props", this.props);
        return (
            <div className="angular-container">
                Angular
            </div>
        )
    }
}

export default AngularPage;