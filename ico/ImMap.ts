import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Map icon from IcoMoon Free
 * @module
 */
export function ImMap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 3l5-2v12l-5 2z"}},{tag:"path",attr:{d:"M6 0.5l5 3v11.5l-5-2.5z"},child:[]},{tag:"path",attr:{d:"M12 3.5l4-3v12l-4 3z"},child:[]}]})(props);
}
export default ImMap;
