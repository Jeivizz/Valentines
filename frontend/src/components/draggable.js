export function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var currentX = 0, currentY = 0;

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

        var newX = currentX - pos1;
        var newY = currentY - pos2;

        var rect = elmnt.getBoundingClientRect();
        var parentRect = elmnt.parentElement.getBoundingClientRect();

        var maxLeft = parentRect.width - rect.width;
        var maxTop = parentRect.height - rect.height;

        var initialLeft = elmnt.offsetLeft;
        var initialTop = elmnt.offsetTop;

        if (initialLeft + newX < 0) newX = -initialLeft;
        if (initialTop + newY < 0) newY = -initialTop;
        if (initialLeft + newX > maxLeft) newX = maxLeft - initialLeft;
        if (initialTop + newY > maxTop) newY = maxTop - initialTop;

        currentX = newX;
        currentY = newY;

        var hasRotateLeft = elmnt.className.includes('-rotate');
        var hasRotateRight = elmnt.className.includes('rotate') && !elmnt.className.includes('-rotate');
        var rotation = hasRotateLeft ? 'rotate(-6deg)' : hasRotateRight ? 'rotate(15deg)' : '';

        elmnt.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) ${rotation}`;
    }

    function closeDragElement(e) {
        document.onpointerup = null;
        document.onpointermove = null;
        if (elmnt) {
            elmnt.releasePointerCapture(e.pointerId);
        }
    }
}