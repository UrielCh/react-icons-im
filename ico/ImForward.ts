import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Forward icon from IcoMoon Free
 * @module
 */
export function ImForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.096 0c-1.777 3.219-2.076 8.13 4.904 7.966v-3.966l6 6-6 6v-3.881c-8.359 0.218-9.29-7.378-4.904-12.119z"}}]})(props);
}
export default ImForward;
