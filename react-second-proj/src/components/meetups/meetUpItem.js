import { useContext } from 'react';

import classes from './MeetUpItem.module.css';
import Card from '../ui/card'
import FavoritesContext from '../../store/favorites-context';


function MeetUpItem (props) {
    const favoriteCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler () {
        if (itemIsFavorite){
            favoriteCtx.removeFavorite(props.id);
        } else {
            favoriteCtx.addFavorite({
                id : props.id,
                title : props.title,
                description: props.description,
                image : props.image,
                address: props.address
            })};
    }
    return (
        
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>

            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>

            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'Add Favorites' }</button>
            </div>
            </Card>
        </li>
        
    )
}

export default MeetUpItem;
