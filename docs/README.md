# Variant

A mixin that adds contextual variations to components. This usually deals with
the color or the way a component is displayed. This mixin is inherited by many
components.

[[toc]]

## Installation

NPM

    npm i @vue-interface/variant --save

Yarn

    yard add @vue-interface/variant

## Options

### variant

- Type: `string`
- Default: `primary`

The default component variant.

### variantPrefix

- Type: `string`
- Default: `kebabCase(this.$options.name)`

The variant prefix. By default, the kebab component name is used.

### variantClass

- Type: `string`
- Default: `prefix(this.variant, this.variantPrefix)`

The prefixed variant value.

## Tailwindcss

### Plugin

If you want to include Alerts in your Tailwindcss build, then intall the plugin.

    module.exports = {
        plugins: [
            require('@vue-interface/variant/tailwind')
        ]
    };

### Theme

*These are the default values. Only override what you need.*

``` js
module.exports = {
    theme: {
        variations: {
            primary: theme('colors.blue.500', '#9E9E9E'),
            secondary: theme('colors.gray.600', '#718096'),
            danger: theme('colors.red.600', '#E53E3E'),
            success: theme('colors.green.500', '#48BB78'),
            warning: theme('colors.orange.500', '#ED8936'),
            info: theme('colors.teal.400', '#68D391'),
            dark: theme('colors.gray.800', '#2D3748'),
            light: theme('colors.gray.100', '#F7FAFC'),
            muted: theme('colors.white', '#FFF')
        }
    }
}
```
