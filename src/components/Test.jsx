import { useState, useEffect, useRef } from 'react';

const App = () => {
    const [showButtons, setShowButtons] = useState(false);
    const buttonsRef = useRef(null);

    const toggleButtons = () => {
        setShowButtons(!showButtons);
    };

    const handleClickOutside = (event) => {
        if (buttonsRef.current && !buttonsRef.current.contains(event.target)) {
            setShowButtons(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='button-container' ref={buttonsRef}>
            <button onClick={toggleButtons} className='button-1'>
                1
            </button>
            {showButtons && (
                <div className='button-group'>
                    <button className='button-2'>2</button>
                    <button className='button-3'>3</button>
                </div>
            )}
        </div>
    );
};

export default App;
