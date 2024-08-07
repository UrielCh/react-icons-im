import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Crop icon from IcoMoon Free
 * @module
 */
export function ImCrop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13 4l3-3-1-1-3 3h-7v-3h-2v3h-3v2h3v8h8v3h2v-3h3v-2h-3v-7zM5 5h5l-5 5v-5zM6 11l5-5v5h-5z"}}]})(props);
}
export default ImCrop;
