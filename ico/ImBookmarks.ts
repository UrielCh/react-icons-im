import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function ImBookmarks(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 2v14l5-5 5 5v-14zM12 0h-10v14l1-1v-12h9z"}}]})(props);
}
export default ImBookmarks;
