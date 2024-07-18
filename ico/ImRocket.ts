import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Rocket icon from IcoMoon Free
 * @module
 */
export function ImRocket(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11 1l-5 5h-3l-3 4c0 0 3.178-0.885 5.032-0.47l-5.032 6.47 6.592-5.127c0.919 2.104-0.592 5.127-0.592 5.127l4-3v-3l5-5 1-5-5 1z"}}]})(props);
}
export default ImRocket;
