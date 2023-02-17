import './FeedbackOptions.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <div className="buttons">
        {options.map(item => {
        return <button key={item} type="button" onClick={onLeaveFeedback} title={item}>{item}</button>
    })}
    </div>
}

