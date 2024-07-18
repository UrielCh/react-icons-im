import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLeft icon from IcoMoon Free
 * @module
 */
export function ImArrowLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0.5 8l7.5 7.5v-4.5h8v-6h-8v-4.5z"}}]})(props);
}
export default ImArrowLeft;
