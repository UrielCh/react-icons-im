import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tab icon from IcoMoon Free
 * @module
 */
export function ImTab(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15 0h1v8h-1v-8z"}},{tag:"path",attr:{d:"M0 8h1v8h-1v-8z"},child:[]},{tag:"path",attr:{d:"M5 11h11v2h-11v2.5l-3.5-3.5 3.5-3.5v2.5z"},child:[]},{tag:"path",attr:{d:"M11 5h-11v-2h11v-2.5l3.5 3.5-3.5 3.5z"},child:[]}]})(props);
}
export default ImTab;
