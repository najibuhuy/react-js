import classes from './MeetUpList.module.css'
import MeetUpItem from './meetUpItem';
function MeetUpList (props) {
    return ( 
        <ul className={classes.list}>
            {props.meetups.map((meetup) => (
                <MeetUpItem 
                    key= {meetup.id} 
                    id={meetup.id} 
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}
                    /> 
                ))
            }
        </ul>
    )
}

export default MeetUpList;