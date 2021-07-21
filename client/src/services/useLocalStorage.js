import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return JSON.parse(window.localStorage.getItem(key)) || initialValue
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value])

    return [value, setValue];
}

export default useLocalStorage;