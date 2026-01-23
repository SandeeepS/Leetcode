    strs = strs.sort();
    let firstString = strs[0];
    let lastString = strs[strs.length - 1];
    let maxLength = Math.max(firstString.length, lastString.length);
    let resultStr = "";
    for (let i = 0; i < maxLength; i++) {
        if (firstString[i] === lastString[i]) {
            resultStr += firstString[i];
        } else {
            return resultStr;
        }
    }
    return resultStr;

    