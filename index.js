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
        var c, f, l, a = e, s = !0;
        function p(n, t) {
            return s && (c = f = e, s = !1, l = u.apply(n, t), s = !0), l;
        }
        function d() {
            a = e, i ? c = f = e : f && p(c, f);
        }
        function h() {
            c = this, f = arguments, a === e ? (a = n(d, r), o && p(c, f)) : (t(a), a = n(d, r));
        }
        function v() {
            a === e || t(a), c = f = a = e;
        }
        function y() {
            return v(), a = n(d, r), s = !0, p(this, arguments);
        }
        return h.clear = v, h.cause = y, h.flush = function() {
            f && y.apply(c, f);
        }, h;
    };
}(setTimeout, clearTimeout, null);

exports.default = n;
