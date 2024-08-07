import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hackernews icon from IcoMoon Free
 * @module
 */
export function ImHackernews(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 0v16h16v-16h-16zM8.5 9.125v3.375h-1v-3.375l-2.734-5.125h1.134l2.1 3.938 2.1-3.938h1.134l-2.734 5.125z"}}]})(props);
}
export default ImHackernews;
