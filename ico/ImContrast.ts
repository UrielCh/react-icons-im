import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Contrast icon from IcoMoon Free
 * @module
 */
export function ImContrast(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM2 8c0-3.314 2.686-6 6-6v12c-3.314 0-6-2.686-6-6z"}}]})(props);
}
export default ImContrast;
