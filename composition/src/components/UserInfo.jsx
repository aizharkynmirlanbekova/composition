const UserInfo = (props) => {
    return (
     <div className="user-info">
            <img src={props.author.avatarUrl} alt={props.author.name}/>
            <div className="user-info-name">{props.author.name}</div>
     </div>
  );
};

export default UserInfo
