import React from 'react';
import MultiSelectDemo from './react/MultiSelectDemo';


class ReactPage extends React.Component {
    render(){
        return (
            <div className="react-container full-width">
                <div className="gap-bottom-sm full-width">
                    <MultiSelectDemo/>
                </div>
            </div>
        )
    }
}

export default ReactPage;