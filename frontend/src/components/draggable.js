export function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onpointerdown = dragPointerDown;

    function dragPointerDown(e) {
        e = e || window.event;
        e.preventDefault();
        e.stopPropagation();

        elmnt.setPointerCapture(e.pointerId);

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onpointerup = closeDragElement;
        document.onpointermove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        e.stopPropagation();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        var newTop = elmnt.offsetTop - pos2;
        var newLeft = elmnt.offsetLeft - pos1;

        var maxLeft = window.innerWidth - elmnt.offsetWidth;
        var maxTop = window.innerHeight - elmnt.offsetHeight;

        if (newLeft < 0) newLeft = 0;
        if (newTop < 0) newTop = 0;
        if (newLeft > maxLeft) newLeft = maxLeft;
        if (newTop > maxTop) newTop = maxTop;

        elmnt.style.top = newTop + "px";
        elmnt.style.left = newLeft + "px";
    }

    function closeDragElement(e) {
        document.onpointerup = null;
        document.onpointermove = null;
        if (elmnt) {
            elmnt.releasePointerCapture(e.pointerId);
        }
    }
}