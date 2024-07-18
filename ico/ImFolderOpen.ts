import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FolderOpen icon from IcoMoon Free
 * @module
 */
export function ImFolderOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13 15l3-8h-13l-3 8zM2 6l-2 9v-13h4.5l2 2h6.5v2z"}}]})(props);
}
export default ImFolderOpen;
