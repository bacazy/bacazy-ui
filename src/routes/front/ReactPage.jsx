import React from 'react';
import MultiSelectDemo from './react/MultiSelectDemo';
import ResizeListen from './react/ResizeListen';


class ReactPage extends React.Component {
    render(){
        return (
            <div className="react-container full-width">
                <div className="gap-bottom-sm full-width">
                    <MultiSelectDemo/>
                    <ResizeListen />
                </div>
            </div>
        )
    }
}

export default ReactPage;