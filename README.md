# IcoMoon Free icons for deno / Preact

**License** [CC BY 4.0 License](https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt)

**Project** [https://github.com/Keyamoon/IcoMoon-Free](https://github.com/Keyamoon/IcoMoon-Free)

[See available icons here](https://react-icons.deno.dev/im)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/im":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-im@1.0.8/mod.ts",
    "react-icons/im/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-im@1.0.8/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib im

```ts
import { ImHome } from "https://deno.land/x/react_icons_im@1.0.8/mod.ts"
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

