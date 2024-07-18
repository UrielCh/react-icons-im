import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Road icon from IcoMoon Free
 * @module
 */
export function ImRoad(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11 16h5l-4-16h-3l0.5 4h-3l0.5-4h-3l-4 16h5l0.5-4h5l0.5 4zM5.75 10l0.5-4h3.5l0.5 4h-4.5z"}}]})(props);
}
export default ImRoad;
