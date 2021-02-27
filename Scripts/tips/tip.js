export const Tips = (tipsObj) => {
    return (
        `<div>
            <p>What action are you doing: ${tipsObj.action}</p>
            <p>Why are you doing it? ${tipsObj.reason}</p>
        </div>`
    );
};