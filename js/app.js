import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {

}

const Component = (props) => {
    return (
        <div>Hola</div>
    )
}

ReactDOM.render(<Component />, document.getElementById('app'))
