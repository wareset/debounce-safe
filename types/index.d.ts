export interface Debounced<Props extends any[]> {
    (...a: Parameters<Props[0]>): void;
    clear: () => void;
    flush: () => void;
    cross: Props[0];
}
declare const debounce: <FuncArgs extends any[], FuncReturn extends unknown, TimeoutWait extends number = 1, IsLeading extends boolean = false, IsTrailing extends boolean = false>(func: (...a: FuncArgs) => FuncReturn, wait?: TimeoutWait, leading?: IsLeading, trailing?: IsTrailing) => Debounced<[func: (...a: FuncArgs) => FuncReturn, wait: TimeoutWait, leading: IsLeading, trailing: IsTrailing]>;
export default debounce;
