export interface DebounceSafe<Props extends any[]> {
  (...a: Parameters<Props[0]>): void
  clear: () => void
  flush: () => void
  cross: Props[0]
}

const debounce = ((function(setTimeout, clearTimeout, _null_) {
  return function debounce(
    func: Function, wait: number, leading: boolean, throttle: boolean
  ) {
    leading = !!leading, throttle = !!throttle
    
    let iam: any, args: any, res: any,
      tID: ReturnType<typeof setTimeout> | null = _null_, run = true
  
    function awaiter(): void {
      tID = _null_
      !leading || leading !== throttle ? exec(iam, args) : iam = args = _null_
    }
    function clearID(): void { tID === _null_ || (clearTimeout(tID), tID = _null_) }
    function timeout(): void { tID = setTimeout(awaiter, wait) }
  
    function exec(_iam: any, _args: any): any {
      _args && run &&
      (iam = args = _null_, run = false, res = func.apply(_iam, _args), run = true)
      return res
    }
  
    function debounced(this: any): void {
      iam = this, args = arguments
      tID === _null_
        ? (timeout(), leading && exec(iam, args))
        : throttle || (clearID(), timeout())
    }
  
    function clear(): void {
      clearID(), iam = args = _null_
    }
    function flush(): void {
      args && cross.apply(iam, args)
    }
    function cross(this: any): any {
      clearID(), leading && timeout()
      return run = true, exec(this, arguments)
    }
    debounced.clear = clear
    debounced.flush = flush
    debounced.cross = cross
    return debounced
  }
})(setTimeout, clearTimeout, null)) as ({
  <
    FuncArgs extends any[],
    FuncReturn extends any,
    TimeoutWait extends number = 1,
    IsLeading extends boolean = false,
    IsThrottle extends boolean = false
  >(
    func: (...a: FuncArgs) => FuncReturn, wait?: TimeoutWait,
    leading?: IsLeading, throttle?: IsThrottle
  ): (
    DebounceSafe<Parameters<(
      func: (...a: FuncArgs) => FuncReturn, wait: TimeoutWait,
      leading: IsLeading, throttle: IsThrottle
    ) => void>>
  )
})

export default debounce
