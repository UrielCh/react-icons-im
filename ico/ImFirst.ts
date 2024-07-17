import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function ImFirst(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 14v-12h2v5.5l5-5v5l5-5v11l-5-5v5l-5-5v5.5z"}}]})(props);
}
export default ImFirst;
