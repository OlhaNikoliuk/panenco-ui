# Text

### Usage

```js
import { Text, useTheme } from '@panenco/ui';

const YourComponent = () => {
  const theme = useTheme();
  return (
    <Text size={theme.typography.sizes.xl} weight={theme.typography.weights.bold} color={theme.colors.base900}>
      Hello world
    </Text>
  );
};
```

<!-- STORY -->

### Properties

- `size` - font size ( you can using it like size={theme.size.s} from your own theme or just size="s" from default theme from ui)
- `weight` - font weight
- `color` - font color
- `children` - text content
- `component` - p, span or any custom component

| propName  | propType                                     | defaultValue | isRequired |
| --------- | -------------------------------------------- | ------------ | ---------- |
| size      | string                                       | s            | -          |
| weight    | string                                       | inherit      | -          |
| color     | string                                       | inherit      | -          |
| component | keyof React.ReactHTML or React.ComponentType | span         | -          |
| children  | node                                         | -            | +          |

### Sizes

| size | textSize | lineHeight |
| ---- | -------- | ---------- |
| xs   | 12       | 16         |
| s    | 16       | 20         |
| m    | 20       | 26         |
| l    | 26       | 32         |
| xl   | 32       | 41         |
| h3   | 41       | 52         |
| h2   | 52       | 66         |
| h1   | 66       | 85         |

### Weights

| weight     | value |
| ---------- | ----- |
| thin       | 100   |
| extraLight | 200   |
| light      | 300   |
| regular    | 400   |
| medium     | 500   |
| semiBold   | 600   |
| bold       | 700   |
| black      | 900   |
