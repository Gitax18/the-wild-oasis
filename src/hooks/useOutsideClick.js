import { useEffect, useRef } from "react";

export function useOutsideClick(handler, capturingOrBubbling = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, capturingOrBubbling);
      return () => document.removeEventListener("click", handleClick);
    },
    [handler, capturingOrBubbling]
  );

  return ref;
}
