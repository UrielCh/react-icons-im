import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Menu icon from IcoMoon Free
 * @module
 */
export function ImMenu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M1 3h14v3h-14zM1 7h14v3h-14zM1 11h14v3h-14z"}}]})(props);
}
export default ImMenu;
