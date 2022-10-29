/* eslint-disable */
/*
dester builds:
index.ts
*/
var n = function(n, t, u) {
    return function(i, o, r, c) {
        o = (o |= 0) > 0 ? o : 1, r = !!r, c = !c && r;
        var f, e, a, l = u, s = !0;
        function p() {
            l = u, c ? f = e = u : v(f, e);
        }
        function h() {
            l === u || (t(l), l = u);
        }
        function m() {
            l = n(p, o);
        }
        function v(n, t) {
            return t && s && (f = e = u, s = !1, a = i.apply(n, t), s = !0), a;
        }
        function y() {
            f = this, e = arguments, l === u ? (m(), r && v(f, e)) : (h(), m());
        }
        function T() {
            return h(), r && m(), s = !0, v(this, arguments);
        }
        return y.clear = function() {
            h(), f = e = u;
        }, y.flush = function() {
            e && T.apply(f, e);
        }, y.cross = T, y;
    };
}(setTimeout, clearTimeout, null);

export { n as default };
