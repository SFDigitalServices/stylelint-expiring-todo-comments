# stylelint-expiring-todo-comments

This is a bare-bones implementation of [eslint-plugin-unicorn's][eslint-plugin-unicorn] [expiring-todo-comments] rule for [stylelint], so you can lint for `TODO` (or `FIXME`) comments that match a [semver] range for the `version` field of `{cwd}/package.json`.

```css
/* TODO [>= 1.0]: deprecate this */
.btn.fancy { }
```

If the `version` field in `{cwd}/package.json` satisfies the semver range (`>= 1.0` above), then stylelint will output an error (or warning) for the stylesheet including the text, `deprecate this`. Otherwise, no error will be generated.

## Setup

1. Install `stylelint-expiring-todo-comments`:

    ```sh
    npm install --save-dev stylelint-expiring-todo-comments
    ```

2. Add the `sfgov/expiring-todo-comments` rule your stylelint config:

    ```json
    {
      "rules": {
        "sfgov/expiring-todo-comments": true
      }
    }
    ```

Follow the [package version comment conventions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md#package-version) from [expiring-todo-comments], i.e.

```css
/* (TODO|FIXME) [semver]: comment */
```

That is:

1. The keyword `TODO` or `FIXME`, which can be customized with the `keywords` rule option:

    ```json
    {
      "rules": {
        "sfgov/expiring-todo-comments": [true, {
          "keywords": ["YOLO", "ROFL"]
        }]
      }
    }
    ```

1. A single space
1. A valid [semver] range surrounded by `[` and `]`
1. A colon (`:`) and one or more spaces
1. An optional comment to output in the stylelint error

The default [severity] is `error`, but you can output non-fatal warnings by setting `severity: 'warning'` in the rule options:

```json
{
  "rules": {
    "sfgov/expiring-todo-comments": [true, {
      "severity": "warning"
    }]
  }
}
```

## Etc.

1. The default branch is `main`, not `master`.
2. The [MIT license](LICENSE) is included by default.

[eslint-plugin-unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn
[expiring-todo-comments]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
[stylelint]: https://stylelint.io/
[semver]: https://nodesource.com/blog/semver-a-primer/
[severity]: https://stylelint.io/user-guide/configure#severity