import React, { useState } from 'react';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import './Search.css';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

function Search({ hidebuttons }) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        });
        navigate('/search');
    };

    const feelingLucky = () => {
        window.location.href = 'https://doodles.google/';
      };

    return (
        <div className="search">
            <form onSubmit={search}>
                {!hidebuttons && <SearchIcon />}
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <KeyboardVoiceIcon />
                {hidebuttons && <SearchIcon />}
            </form>
            {!hidebuttons && (
                <div className="search__buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button onClick={feelingLucky}>I'm Feeling Lucky</Button>
                </div>
            )}
        </div>
    );
}

export default Search;
