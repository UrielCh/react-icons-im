import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ltr icon from IcoMoon Free
 * @module
 */
export function ImLtr(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0c-2.209 0-4 1.791-4 4s1.791 4 4 4v8h2v-14h2v14h2v-14h2v-2h-8zM0 11l4-4-4-4z"}}]})(props);
}
export default ImLtr;
