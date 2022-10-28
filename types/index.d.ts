export interface DebounceSafe<Props extends any[]> {
    (...a: Parameters<Props[0]>): void;
    clear: () => void;
    flush: () => void;
    cross: Props[0];
}
declare const debounce: <FuncArgs extends any[], FuncReturn extends unknown, TimeoutWait extends number = 1, IsLeading extends boolean = false, IsThrottle extends boolean = false>(func: (...a: FuncArgs) => FuncReturn, wait?: TimeoutWait, leading?: IsLeading, throttle?: IsThrottle) => DebounceSafe<[func: (...a: FuncArgs) => FuncReturn, wait: TimeoutWait, leading: IsLeading, throttle: IsThrottle]>;
export default debounce;
