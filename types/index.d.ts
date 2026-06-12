export interface Debounced<Props extends any[]> {
    (...a: Parameters<Props[0]>): void;
    clear: () => void;
    flush: () => void;
    cause: Props[0];
}
declare function debounce<Fn extends Function, Wait extends number = 0, IsLeading extends boolean = false, MaxWait extends number = -1>(fn: Fn, wait?: Wait, isLeading?: IsLeading, maxWait?: MaxWait): Debounced<Parameters<(fn: Fn, wait: Wait, isLeading: IsLeading, maxWait: MaxWait) => void>>;
export default debounce;
