import react from'react';

function FirstComponent(props) {
    return <h1>My very first component</h1>;
}

function NamedComponent(props) {
    return <h1>My name is {props.name}</h1>;
}

const app = (
    <div>
        <FirstComponent />
        <NamedComponent name="Jane" />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);