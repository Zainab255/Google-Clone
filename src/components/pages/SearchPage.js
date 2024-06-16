import React from 'react';
import Search from './Search';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import useSearch from './useSearch'; // Import the useSearch hook
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = useSearch(term); // Use the useSearch hook

  


  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt="Google Logo" />
        <Search hidebuttons />
      </div>

      <div className='searchPage__options'>
        <div className='searchPage__optionsLeft'>
          <div className='searchPage__option'>
            <Link to='/All' >ALL</Link>
          </div>
          <div className='searchPage__option'>
            <Link to='/Images' >Images</Link>
          </div>
          <div className='searchPage__option'>
            <Link to='/videos' >videos</Link>
          </div>
          <div className='searchPage__option'>
            <Link to='/News' >News</Link>
          </div>
          <div className='searchPage__option'>
            <Link to='/Books' >Books</Link>
          </div>
          <div className='searchPage__option'>
            <MoreVertIcon />
            <Link to='/More' >More</Link>
          </div>
        </div>
        <div className='searchPage__optionsRight'>
          <div className='searchPage__option'>
            <Link to='/Tools' >Tools</Link>
          </div>
        </div>
      </div>

      <div className="searchPage__body">
        {data && (
          <div className='searchPage__results'>
            {/* <p className='searchPage__resultCount'>
              About {data.searchInformation?.formattedTotalResults ?? '0'} results ({data.searchInformation?.formattedSearchTime ?? '0'} seconds) for {term}
            </p> */}
            
            {data.items && data.items.map(item => (
              <div className='searchPage__result' key={item.Id}>
                {item.pagemap?.cse_image?.length > 0 && (
                  <img 
                    src={item.pagemap.cse_image[0].src} 
                    alt={item.title} 
                    className='searchPage__resultImage'
                  />
                )}
                <a href={item.link} target="_blank" rel="noopener noreferrer" className='link1'>{item.displayLink}</a>
                
                <a className='searchPage__resultTitle' href={item.link} target="_blank" rel="noopener noreferrer">
                  <h4>{item.title}</h4>
                </a>
                <p>{item.snippet}</p>
                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
