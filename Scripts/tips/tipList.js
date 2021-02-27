import { getTips } from './tips/tipData.js'
import { Tips } from './tips/tip.js'

export const tipList = () => {
    const tips = getTips()
    const sidebar = documment.querySelector(".tips-sidebar")

        let tipsHTMLRep = "";
        for (const oneTip of tips) {
            tipsHTMLRep += Tips(oneTip);
        };
        console.log("tipsHTMLRep", tipsHTMLRep);
    sidebar.innerHTML = tipsHTMLRep;
};

