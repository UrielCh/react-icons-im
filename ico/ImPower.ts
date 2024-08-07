import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Power icon from IcoMoon Free
 * @module
 */
export function ImPower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 0l-6 8h6l-4 8 14-10h-8l6-6z"}}]})(props);
}
export default ImPower;
