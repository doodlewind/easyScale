/**
 * easyScale.js
 * @author doodlewind
 * @licence MIT
 */
(function($) {
    var easyScale = function(nodes) {
        var __autoScale = function() {
            var currHeight = $(window).height();
            var currWidth = $(window).width();

            $(nodes).each(function(i) {
                var node = nodes[i];

                var minWidth = node.minBound[0];
                var minHeight = node.minBound[1];
                var maxWidth = node.maxBound[0];
                var maxHeight = node.maxBound[1];

                var xScale = Math.max(minWidth, currWidth) / maxWidth;
                var yScale = Math.max(minHeight, currHeight) / maxHeight;
                var scale = Math.min(1, Math.min(xScale, yScale));

                $(node.el).each(function(index, el) {
                    el.style.zoom = parseInt(scale * 100) + "%";
                    el.style.MozTransform = "scale("+  parseFloat(scale) +")";
                });
            });
        };
        $(window).resize(function() {
            __autoScale();
        });
        __autoScale();
    };

    $.fn.extend({ easyScale: easyScale });
})(jQuery);
