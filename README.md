# IcoMoon Free icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/im)](https://jsr.io/@preact-icons/im)

**License** [CC BY 4.0 License](https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt)

**Project** [https://github.com/Keyamoon/IcoMoon-Free](https://github.com/Keyamoon/IcoMoon-Free)

[See available icons here](https://react-icons.deno.dev/im)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/im": "jsr:@preact-icons/im@^1.0.11/mod.ts",
    "react-icons/im/": "jsr:@preact-icons/im@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib im

```ts
import { ImHome } from "jsr:preact-icons/im@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { ImHome } from "react-icons/im"
```

## import a single icon, downloading just one icon

```ts
import { ImHome } from "react-icons/im/ImHome.ts"
```

or using default export

```ts
import ImHome from "react-icons/im/ImHome.ts"
```

