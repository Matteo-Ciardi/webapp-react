import './ReviewCard.css'

const ReviewCard = ({ reviewProp }) => {
    const { name, vote, text } = reviewProp;

    return (
        <div className="review-bg">
            <p className='review-body'>
                {text}
            </p>
            <div className='review-square'>
                <strong className='review-vote'>Vote: {vote}</strong>
                <address className='review-author'>By {name}</address>
            </div>
        </div>
    )
}

export default ReviewCard