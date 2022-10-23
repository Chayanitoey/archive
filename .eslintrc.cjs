/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  plugins: ['vue', 'prettier'],
  root: true,
  ignorePatterns: ['**/*.d.ts'],
  rules: {
    'prettier/prettier': 'warn',
    'vue/array-bracket-newline': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/attribute-hyphenation': 'off',
    'vue/attributes-order': 'error',
    'vue/block-lang': 'off',
    'vue/block-spacing': 'error',
    'vue/block-tag-newline': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'off',
    'vue/comma-spacing': 'error',
    'vue/comma-style': 'error',
    'vue/component-api-style': 'off',
    'vue/component-definition-name-casing': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/component-options-name-casing': 'error',
    'vue/component-tags-order': 'error',
    'vue/custom-event-name-casing': 'error',
    'vue/define-macros-order': 'error',
    'vue/dot-location': 'error',
    'vue/dot-notation': 'error',
    'vue/eqeqeq': 'error',
    'vue/first-attribute-linebreak': 'error',
    'vue/func-call-spacing': 'error',
    'vue/html-button-has-type': 'error',
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/html-comment-indent': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-indent': 'off',
    'vue/html-quotes': 'error',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
      },
    ],
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/match-component-import-name': 'error',
    'vue/max-attributes-per-line': 'off',
    'vue/max-len': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/new-line-between-multi-line-property': 'off',
    'vue/next-tick-style': 'error',
    'vue/no-arrow-functions-in-watch': 'error',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-bare-strings-in-template': 'off',
    'vue/no-boolean-default': 'error',
    'vue/no-child-content': 'error',
    'vue/no-computed-properties-in-data': 'error',
    'vue/no-constant-condition': 'error',
    'vue/no-custom-modifiers-on-v-model': 'error',
    'vue/no-deprecated-data-object-declaration': 'error',
    'vue/no-deprecated-destroyed-lifecycle': 'error',
    'vue/no-deprecated-dollar-listeners-api': 'error',
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    'vue/no-deprecated-events-api': 'error',
    'vue/no-deprecated-filter': 'error',
    'vue/no-deprecated-functional-template': 'error',
    'vue/no-deprecated-html-element-is': 'error',
    'vue/no-deprecated-inline-template': 'error',
    'vue/no-deprecated-props-default-this': 'error',
    'vue/no-deprecated-router-link-tag-prop': 'error',
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-deprecated-v-bind-sync': 'error',
    'vue/no-deprecated-v-is': 'error',
    'vue/no-deprecated-v-on-native-modifier': 'error',
    'vue/no-deprecated-v-on-number-modifiers': 'error',
    'vue/no-deprecated-vue-config-keycodes': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/no-dupe-v-else-if': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-duplicate-attributes': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-export-in-script-setup': 'error',
    'vue/no-expose-after-await': 'error',
    'vue/no-extra-parens': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-lifecycle-after-await': 'error',
    'vue/no-lone-template': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-multiple-slot-args': 'error',
    'vue/no-multiple-template-root': 'off',
    'vue/no-mutating-props': 'error',
    'vue/no-parsing-error': 'error',
    'vue/no-potential-component-option-typo': 'error',
    'vue/no-ref-as-operand': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-reserved-props': 'error',
    'vue/no-restricted-block': 'error',
    'vue/no-restricted-call-after-await': 'error',
    'vue/no-restricted-class': 'error',
    'vue/no-restricted-component-options': 'error',
    'vue/no-restricted-custom-event': 'error',
    'vue/no-restricted-html-elements': 'error',
    'vue/no-restricted-props': 'error',
    'vue/no-restricted-static-attribute': 'error',
    'vue/no-restricted-syntax': 'error',
    'vue/no-restricted-v-bind': 'error',
    'vue/no-setup-props-destructure': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-sparse-arrays': 'error',
    'vue/no-static-inline-styles': 'off',
    'vue/no-template-key': 'error',
    'vue/no-template-shadow': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-undef-components': [
      'error',
      { ignorePatterns: ['^el-', '^router-', 'slot', '^share-network$'] },
    ],
    'vue/no-undef-properties': 'error',
    'vue/no-unsupported-features': 'error',
    'vue/no-unused-components': 'error',
    'vue/no-unused-properties': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-unused-vars': 'error',
    'vue/no-use-computed-property-like-method': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-useless-concat': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-template-attributes': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-for-template-key': 'error',
    'vue/no-v-for-template-key-on-child': 'error',
    'vue/no-v-html': 'error',
    'vue/no-v-model-argument': 'error',
    'vue/no-v-text': 'error',
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/no-watch-after-await': 'error',
    'vue/object-curly-newline': 'error',
    'vue/object-curly-spacing': 'off',
    'vue/object-property-newline': 'error',
    'vue/object-shorthand': 'error',
    'vue/one-component-per-file': 'error',
    'vue/operator-linebreak': 'error',
    'vue/order-in-components': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-import-from-vue': 'error',
    'vue/prefer-prop-type-boolean-first': 'error',
    'vue/prefer-separate-static-class': 'off',
    'vue/prefer-template': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/prop-name-casing': 'error',
    'vue/quote-props': 'off',
    'vue/require-component-is': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-emit-validator': 'off',
    'vue/require-explicit-emits': 'error',
    'vue/require-expose': 'off',
    'vue/require-name-property': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-render-return': 'error',
    'vue/require-slots-as-functions': 'error',
    'vue/require-toggle-inside-transition': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/return-in-emits-validator': 'error',
    'vue/script-indent': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/sort-keys': 'off',
    'vue/space-in-parens': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/static-class-names-order': 'off',
    'vue/template-curly-spacing': 'error',
    'vue/this-in-template': 'error',
    'vue/use-v-on-exact': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-for-delimiter-style': 'error',
    'vue/v-on-event-hyphenation': 'error',
    'vue/v-on-function-call': 'error',
    'vue/v-on-style': 'error',
    'vue/v-slot-style': 'error',
    'vue/valid-define-emits': 'error',
    'vue/valid-define-props': 'error',
    'vue/valid-model-definition': 'off',
    'vue/valid-next-tick': 'error',
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-bind-sync': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-is': 'error',
    'vue/valid-v-memo': 'error',
    'vue/valid-v-model': 'off',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-slot': 'error',
    'vue/valid-v-text': 'error',
  },
}
