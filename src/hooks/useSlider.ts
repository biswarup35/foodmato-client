import * as React from "react";
import { useEventListener } from "usehooks-ts";

const useSlider = <T extends HTMLDivElement>(ref: React.RefObject<T>) => {
  let slider = ref.current as T;
  let [mouseDown, setMouseDown] = React.useState(false);
  let [startX, setStartX] = React.useState(0);
  let [scrollLeft, setScrollLeft] = React.useState(0);

  const handleStartDrag = React.useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      if (slider) {
        setMouseDown(true);
        setStartX(e.pageX - slider.offsetLeft);
        setScrollLeft(slider.scrollLeft);
        slider.scroll({ behavior: "smooth" });
      }
    },
    [slider, setStartX, setScrollLeft, setMouseDown]
  );
  const handleStopDrag = React.useCallback(() => {
    setMouseDown(false);
  }, [setMouseDown]);

  useEventListener(
    "mousemove",
    (e) => {
      e.preventDefault();
      if (!mouseDown) return;
      if (slider) {
        setMouseDown(true);
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
      }
    },
    ref,
    false
  );
  useEventListener("mousedown", handleStartDrag, ref, false);
  useEventListener("mouseup", handleStopDrag, ref, false);
  useEventListener("mouseleave", handleStopDrag, ref, false);
};

export default useSlider;
