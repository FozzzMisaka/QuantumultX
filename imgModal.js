function showImg(imgSrc) {
    // 创建遮罩层
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.onclick = function () {
        document.body.removeChild(overlay); // 点击遮罩层关闭弹框
    };

    // 创建弹框
    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.onclick = function (event) {
        event.stopPropagation(); // 阻止事件冒泡，防止点击弹框时弹框被关闭
    };

    var imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    modal.appendChild(imgElement);

    var closeContainer = document.createElement('div');
    closeContainer.className = 'close-button-container';
    modal.appendChild(closeContainer);
    // 创建关闭按钮
    var closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerText = '关闭';
    closeButton.onclick = function (event) {
        event.stopPropagation(); // 阻止事件冒泡，防止点击按钮时弹框被关闭
        document.body.removeChild(overlay); // 点击按钮时关闭弹框
    };
    closeContainer.appendChild(closeButton);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}