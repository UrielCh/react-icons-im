import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * List icon from IcoMoon Free
 * @module
 */
export function ImList(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 0h4v4h-4zM6 1h10v2h-10zM0 6h4v4h-4zM6 7h10v2h-10zM0 12h4v4h-4zM6 13h10v2h-10z"}}]})(props);
}
export default ImList;
