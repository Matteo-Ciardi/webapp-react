const ReviewCard = ({ reviewProp }) => {
    const { name, vote, text } = reviewProp;

    return (
        <div>
            <div>
                <p>
                    {text}
                </p>
                <strong>Vote: {vote}</strong>
                <address>By {name}</address>
            </div>
        </div>
    )
}

export default ReviewCard