import React from 'react';

import UseReactHooksComponent from './Components/UseReactHooksComponent'
import UseContextHookComponent from './Components/UseContextHookComponent'

export default function Welcome () {
    const ThemeContext = React.createContext('light');

    return (
        <>
            <div>
                <h2>
                    Hello Docker Multiverse!
                </h2>
            </div>

            <UseReactHooksComponent />

            <ThemeContext.Provider value="dark">
                <UseContextHookComponent />
            </ThemeContext.Provider>
        </>
    );
}