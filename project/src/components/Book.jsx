const Book = (props) => {
    console.log(props.book);
    
    return (
        <div>
            <h1>{props.book[0].name}</h1>
            <h2>{props.book[0].prise}</h2>
            <h1>{props.book[0].name}</h1>
        </div>
    );
};

export default Book