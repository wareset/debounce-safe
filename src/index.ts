export interface Debounced<Props extends any[]> {
  (...a: Parameters<Props[0]>): void
  clear: () => void
  flush: () => void
  cause: Props[0]
}

const debounce = ((function(setTimeout, clearTimeout, _null_) {
  return function debounce(
    func: Function, wait: number, leading: boolean, noTrailing: boolean
  ) {
    // for universal compatibility
    wait = (wait |= 0) > 0 ? wait : 1
    leading = !!leading, noTrailing = !noTrailing && leading /* ))) */

    let iam: any, args: any, res: any,
      tID: ReturnType<typeof setTimeout> | null = _null_, run = true

    function exec(_iam: any, _args: any): any {
      run &&
        (
          iam = args = _null_,
          run = false, res = func.apply(_iam, _args), run = true
        )
      return res
    }
  
    function awaiter(): void {
      tID = _null_, noTrailing ? iam = args = _null_ : args && exec(iam, args)
    }
  
    function debounced(this: any): void {
      iam = this, args = arguments
      tID === _null_
        ? (tID = setTimeout(awaiter, wait), leading && exec(iam, args))
        : (clearTimeout(tID), tID = setTimeout(awaiter, wait))
    }
  
    function clear(): void {
      tID === _null_ || clearTimeout(tID)
      iam = args = tID = _null_
    }
    function cause(this: any): any {
      clear(), tID = setTimeout(awaiter, wait)
      return run = true, exec(this, arguments)
    }
    function flush(): void {
      args && cause.apply(iam, args)
    }
    debounced.clear = clear
    debounced.cause = cause
    debounced.flush = flush
    return debounced
  }
})(setTimeout, clearTimeout, null)) as ({
  <
    FuncArgs extends any[],
    FuncReturn extends any,
    TimeoutWait extends number = 1,
    IsLeading extends boolean = false,
    IsTrailing extends boolean = false
  >(
    func: (...a: FuncArgs) => FuncReturn, wait?: TimeoutWait,
    leading?: IsLeading, trailing?: IsTrailing
  ): (
    Debounced<Parameters<(
      func: (...a: FuncArgs) => FuncReturn, wait: TimeoutWait,
      leading: IsLeading, trailing: IsLeading extends true ? IsTrailing : true
    ) => void>>
  )
})

export default debounce
