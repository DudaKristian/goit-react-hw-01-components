import PropTypes from "prop-types"
import styles from "./friendList.module.css"

const FriendList = ({ friends } ) => {
    return (
        <div>
            <ul className = {styles.friendList}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li key = {id} className = {styles.item}>
                        <span   className={styles.status}
                            style={isOnline ?
                                { backgroundColor: "green" } :
                                { backgroundColor: "red" }} >
                            {isOnline}</span>
                        <img src={avatar} alt="User avatar" width="48" className={styles.avatar} />
                        <p className={styles.name}>{name}</p>
                    </li>))
                }
            </ul>
        </div>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        })
    ),
};



export default FriendList