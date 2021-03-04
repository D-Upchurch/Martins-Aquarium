import { getTips } from './tipData.js'
import { Tips } from './tip.js'

export const tipList = () => {
    const tips = getTips()
    const sidebar = document.querySelector(".tips-sidebar")

        let tipsHTMLRep = "";
        for (const oneTip of tips) {
            tipsHTMLRep += Tips(oneTip);
        };
    sidebar.innerHTML = tipsHTMLRep;
};

