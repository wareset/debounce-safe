/* eslint-disable */
/*
dester builds:
index.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = function(n, t, u) {
    return function(e, o, r, i) {
        r = !!r, i = !!i;
        var c, f, l, s = u, a = !0;
        function p() {
            s = u, r && r === i ? c = f = u : v(c, f);
        }
        function d() {
            s === u || (t(s), s = u);
        }
        function h() {
            s = n(p, o);
        }
        function v(n, t) {
            return t && a && (c = f = u, a = !1, l = e.apply(n, t), a = !0), l;
        }
        function y() {
            c = this, f = arguments, s === u ? (h(), r && v(c, f)) : i || (d(), h());
        }
        function m() {
            return d(), r && h(), a = !0, v(this, arguments);
        }
        return y.clear = function() {
            d(), c = f = u;
        }, y.flush = function() {
            f && m.apply(c, f);
        }, y.cross = m, y;
    };
}(setTimeout, clearTimeout, null);

exports.default = n;
