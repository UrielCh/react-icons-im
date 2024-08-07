import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pilcrow icon from IcoMoon Free
 * @module
 */
export function ImPilcrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 0h8v2h-2v14h-2v-14h-2v14h-2v-8c-2.209 0-4-1.791-4-4s1.791-4 4-4z"}}]})(props);
}
export default ImPilcrow;
