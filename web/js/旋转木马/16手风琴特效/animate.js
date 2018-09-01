function animate(obj, json) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//�ȶ���һ����� flagΪtrue��ʾ�������
        for (var k in json) {
            var leader = parseInt(getStyle(obj, k)) || 0;
            var target = json[k];
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style[k] = leader + step + "px";
            if (leader != target) {
                flag = false;//ֻҪ��û�ﵽ�ľͰ�flag����Ϊfalse
            }
        }
        if (flag) {//˵���������Զ�������Ŀ��
            clearInterval(obj.timer);
        }
    }, 15)
}
//���� ��ȡ����������������
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}