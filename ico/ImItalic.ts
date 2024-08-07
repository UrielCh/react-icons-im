import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Italic icon from IcoMoon Free
 * @module
 */
export function ImItalic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 1v1h-2l-5 12h2v1h-7v-1h2l5-12h-2v-1z"}}]})(props);
}
export default ImItalic;
