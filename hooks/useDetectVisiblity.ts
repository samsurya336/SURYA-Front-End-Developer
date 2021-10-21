import { RefObject, useEffect, useState } from 'react'

//REFER LINK https://usehooks-typescript.com/react-hook/use-intersection-observer



function useDetectVisiblity(elementRef: RefObject<Element>, rootMargin: string): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()


  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    // if(entry.isIntersecting){
      setEntry(entry)
    // }
  }

  useEffect(() => {
    const node = elementRef?.current // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport  || !node) return

    const observer = new IntersectionObserver(updateEntry, { rootMargin : rootMargin })

    observer.observe(node)

    return () => observer.disconnect()

  }, [rootMargin,elementRef])

  return entry
}

export default useDetectVisiblity