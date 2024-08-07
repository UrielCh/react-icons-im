import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Enlarge icon from IcoMoon Free
 * @module
 */
export function ImEnlarge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 0h-6.5l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5z"}},{tag:"path",attr:{d:"M16 16v-6.5l-2.5 2.5-3-3-1.5 1.5 3 3-2.5 2.5z"},child:[]},{tag:"path",attr:{d:"M0 16h6.5l-2.5-2.5 3-3-1.5-1.5-3 3-2.5-2.5z"},child:[]},{tag:"path",attr:{d:"M0 0v6.5l2.5-2.5 3 3 1.5-1.5-3-3 2.5-2.5z"},child:[]}]})(props);
}
export default ImEnlarge;
