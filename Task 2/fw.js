(function(root, factory) {

    root.fw = factory();

})(this, function() {

    function fw (selector) {
        return new fw.prototype.init(selector);
    };

    fw.prototype = {
        constructor: fw,
        length: 0,
        init: function(selector) {
            this.selector = selector;
            this.element = document.querySelectorAll(this.selector);
        }
    };

    fw.prototype.init.prototype = fw.prototype;

    fw.prototype.add = function(cl) {
        this.element.forEach(element =>
        element.classList.add(cl));
        return this;
    }
    fw.prototype.delete = function(cl) {
        this.element.forEach(element =>
        element.classList.remove(cl));
        return this;
    }
    fw.prototype.toggle = function(cl) {
        this.element.forEach(element =>
        element.classList.toggle(cl));
        return this;
    }
       

    return fw;
});