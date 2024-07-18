import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Embed icon from IcoMoon Free
 * @module
 */
export function ImEmbed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9 11.5l1.5 1.5 5-5-5-5-1.5 1.5 3.5 3.5z"}},{tag:"path",attr:{d:"M7 4.5l-1.5-1.5-5 5 5 5 1.5-1.5-3.5-3.5z"},child:[]}]})(props);
}
export default ImEmbed;
