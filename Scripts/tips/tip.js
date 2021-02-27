export const Tips = (tipsObj) => {
    return (
        `<div>
            <h4>What action are you doing:</h4>
            <p> ${tipsObj.action}</p>
            <h4>Why are you doing it?</h4>
            <p> ${tipsObj.reason}</p>
        </div>`
    );
};