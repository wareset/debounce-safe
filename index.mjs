/* eslint-disable */
var n = function(n, t, u) {
    return function(r, e, i, c) {
        e = (e |= 0) > 0 ? e : 1, i = !!i, c = !c && i;
        var o, f, a, l = u, s = !0;
        function p(n, t) {
            return s && (o = f = u, s = !1, a = r.apply(n, t), s = !0), a;
        }
        function h() {
            l = u, c ? o = f = u : f && p(o, f);
        }
        function m() {
            o = this, f = arguments, l === u ? (l = n(h, e), i && p(o, f)) : (t(l), l = n(h, e));
        }
        function v() {
            l === u || t(l), o = f = l = u;
        }
        function y() {
            return v(), l = n(h, e), s = !0, p(this, arguments);
        }
        return m.clear = v, m.cause = y, m.flush = function() {
            f && y.apply(o, f);
        }, m;
    };
}(setTimeout, clearTimeout, null);

export { n as default };
