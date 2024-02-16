import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function UseContextHookComponent() {
    // Using the useContext hook to access the theme value from the context
    const theme = useContext(ThemeContext);

    return (
        <>
            <div style={{ background: theme }}>UseContextHookComponent</div>
        </>
    )
}

export default UseContextHookComponent