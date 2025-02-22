export const stringToDate = (date_raw: string) => {
    let date = date_raw.split("-");
    if (date.length < 3) {
        return "Invalid Date";
    }
    return `${new Date(date_raw).toLocaleString("en-us", { month: "short" })} ${
        date[2]
    }, ${date[0]}`;
};

export const CutContent = (content: string) =>
    content.length > 114 ? `${content.substring(0, 114)}...` : content;
