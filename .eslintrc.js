module.exports = {
    extends: [
        require.resolve('@umijs/max/eslint'),
    ],
    rules: {
        'react/display-name': 'off',
        'template-curly-spacing': 'off',
        'indent': [
            'error',
            4,
            {
                'ignoredNodes': [
                    'TemplateLiteral'
                ]
            }
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': [
            'warn',
            'never'
        ],
        'no-console': 0,
        'no-unused-vars': 0,
        'strict': 0,
        'react/prop-types': 0,
        // should add prop-types in future
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/no-unknown-property': 'off',
    },
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true
        }
    }
}
