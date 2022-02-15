import {useContext} from 'react'

import MeetUpList from '../components/meetups/meetUpList';
import FavoritesContext from '../store/favorites-context';

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext)

  let content;
  if(favoriteCtx.totalFavorites === 0) {
    content = <p> You got no fav meet yet </p>;
  } else {
    content = <MeetUpList meetups = {favoriteCtx.favorites} />;
  }
    return (
      <section>
        <h1> My Favorites Meeting</h1>
        {content}
      </section>
    )
  }
  
  export default FavoritesPage;