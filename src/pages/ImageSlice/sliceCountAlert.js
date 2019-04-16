export default function throwSliceCountAlert(imageSlicePropsObj) {
    if (imageSlicePropsObj.sliceCount >= 400) {
        debugger;
        if (!window.confirm("Next increasing slice count more could crash your machine! Continue?")) {
            return false;
        }
    }

    return true;
}