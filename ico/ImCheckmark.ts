import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Checkmark icon from IcoMoon Free
 * @module
 */
export function ImCheckmark(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z"}}]})(props);
}
export default ImCheckmark;
