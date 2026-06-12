export interface Debounced<Props extends any[]> {
  (...a: Parameters<Props[0]>): void
  clear: () => void
  flush: () => void
  cause: Props[0]
}

function debounce<
  Fn extends Function,
  Wait extends number = 0,
  IsLeading extends boolean = false,
  MaxWait extends number = -1,
>(
  fn: Fn,
  wait?: Wait,
  isLeading?: IsLeading,
  maxWait?: MaxWait
): Debounced<
  Parameters<
    (
      fn: Fn,
      wait: Wait,
      isLeading: IsLeading,
      maxWait: MaxWait
    ) => void
  >
> {
  // @ts-ignore
  ;(wait! |= 0) >= 0 || (wait = 0)
  // @ts-ignore
  ;(maxWait! |= 0) > wait || (maxWait = NaN)
  // noTrailing = !noTrailing && isLeading /* ))) */
  let iam: any,
    args: any,
    res: any,
    tID: ReturnType<typeof setTimeout> | null = null,
    mID: ReturnType<typeof setTimeout> | null = null,
    run = 1

  function exec(_iam: any, _args: any): any {
    run &&
      ((iam = args = null),
      (run = 0),
      (res = fn.apply(_iam, _args)),
      (run = 1))
  }

  function awaiter(): void {
    tID = null
    // здесь был noTrailing
    isLeading ? (iam = args = null) : args && exec(iam, args)
  }

  function debounced(this: any): void {
    ;(iam = this), (args = arguments)
    tID === null
      ? ((tID = setTimeout(awaiter, wait)), isLeading && exec(iam, args))
      : (clearTimeout(tID), (tID = setTimeout(awaiter, wait)))
    maxWait && mID === null && (mID = setTimeout(flush, maxWait))
  }

  function clear(): void {
    mID === null || clearTimeout(mID)
    tID === null || clearTimeout(tID)
    iam = args = tID = mID = null
  }
  function cause(this: any): any {
    clear(), (tID = setTimeout(awaiter, wait))
    return (run = 1), exec(this, arguments), res
  }
  function flush(): void {
    args && cause.apply(iam, args)
  }
  debounced.clear = clear
  debounced.cause = cause
  debounced.flush = flush
  // @ts-ignore
  return debounced
}

export default debounce
