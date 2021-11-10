    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = Math.ceil((target - obj.offsetLeft) / 10);
            step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                if (callback) {
                    callback && callback();
                }
            }
            obj.style.left = step + obj.offsetLeft + 'px';
        }, 15);
    }