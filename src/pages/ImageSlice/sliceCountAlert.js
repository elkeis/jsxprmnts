export default function throwSliceCountAlert(imageSlicePropsObj) {
    if (imageSlicePropsObj.sliceCount >= 400) {
        debugger;
        if (!window.confirm("Increasing slice count could crash your machine! Continue?")) {
            return false;
        }
    }

    return true;
}