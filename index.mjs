/* eslint-disable */
/*
dester builds:
index.ts
*/
var n = function(n, t, u) {
    return function(r, i, o, c) {
        i = (i |= 0) > 0 ? i : 1, o = !!o, c = !c && o;
        var e, f, a, l = u, s = !0;
        function p() {
            l = u, c ? e = f = u : f && h(e, f);
        }
        function h(n, t) {
            return s && (e = f = u, s = !1, a = r.apply(n, t), s = !0), a;
        }
        function m() {
            e = this, f = arguments, l === u ? (l = n(p, i), o && h(e, f)) : (t(l), l = n(p, i));
        }
        function v() {
            return l === u || (t(l), l = u), o && (l = n(p, i)), s = !0, h(this, arguments);
        }
        return m.clear = function() {
            l === u || t(l), e = f = l = u;
        }, m.flush = function() {
            f && v.apply(e, f);
        }, m.cross = v, m;
    };
}(setTimeout, clearTimeout, null);

export { n as default };
