import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Delicious icon from IcoMoon Free
 * @module
 */
export function ImDelicious(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 0v16h16v-16h-16zM8 15v-7h-7v-7h7v7h7v7h-7z"}}]})(props);
}
export default ImDelicious;
