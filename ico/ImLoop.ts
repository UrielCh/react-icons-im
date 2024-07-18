import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Loop icon from IcoMoon Free
 * @module
 */
export function ImLoop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 5h10v3l4-4-4-4v3h-12v6h2zM14 11h-10v-3l-4 4 4 4v-3h12v-6h-2z"}}]})(props);
}
export default ImLoop;
