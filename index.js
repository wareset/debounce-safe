/* eslint-disable */
/*
dester builds:
index.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = function(n, t, e) {
    return function(u, r, o, i) {
        r = (r |= 0) > 0 ? r : 1, o = !!o, i = !i && o;
        var c, f, l, s = e, a = !0;
        function p() {
            s = e, i ? c = f = e : f && d(c, f);
        }
        function d(n, t) {
            return a && (c = f = e, a = !1, l = u.apply(n, t), a = !0), l;
        }
        function h() {
            c = this, f = arguments, s === e ? (s = n(p, r), o && d(c, f)) : (t(s), s = n(p, r));
        }
        function v() {
            return s === e || (t(s), s = e), o && (s = n(p, r)), a = !0, d(this, arguments);
        }
        return h.clear = function() {
            s === e || t(s), c = f = s = e;
        }, h.flush = function() {
            f && v.apply(c, f);
        }, h.cross = v, h;
    };
}(setTimeout, clearTimeout, null);

exports.default = n;
