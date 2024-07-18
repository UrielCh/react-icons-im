# IcoMoon Free icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/im)](https://jsr.io/@preact-icons/im)

**License** [CC BY 4.0 License](https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt)

**Project** [https://github.com/Keyamoon/IcoMoon-Free](https://github.com/Keyamoon/IcoMoon-Free)

[See available icons here](https://react-icons.deno.dev/im)

## install the module

```bash
deno add @preact-icons/im
dnpx jsr add @preact-icons/im
pnpm dlx jsr add @preact-icons/im
bunx jsr add @preact-icons/im
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { ImHome } from "@preact-icons/im"
```

## import a single icon, downloading just one icon

```ts
import { ImHome } from "react-icons/im/ImHome"
```

or using default export

```ts
import ImHome from "react-icons/im/ImHome.ts"
```
