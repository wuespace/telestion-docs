/**
 *
 * @type {import('fliegdoc').FliegdocConfig}
 */
module.exports = {
    theme: require('@fliegwerk/fliegdoc-dita-theme').FliegdocDITATheme,
    modules: [
        {
            mainFile: 'node_modules/@wuespace/telestion-client-core/build/index.d.ts',
            package: './node_modules/@wuespace/telestion-client-core/package.json',
            tsconfig: './tsconfig.json'
        },
        {
            mainFile: 'node_modules/@wuespace/telestion-client-common/build/index.d.ts',
            package: './node_modules/@wuespace/telestion-client-common/package.json',
            tsconfig: './tsconfig.json'
        },
        {
            mainFile: 'node_modules/@wuespace/telestion-client-types/types/index.d.ts',
            package: './node_modules/@wuespace/telestion-client-types/package.json',
            tsconfig: './tsconfig.json'
        },
        {
            mainFile: 'node_modules/@wuespace/vertx-event-bus/build/index.d.ts',
            package: './node_modules/@wuespace/vertx-event-bus/package.json',
            tsconfig: './tsconfig.json'
        },
    ],
    outDir: './topics/__generated/api-reference'

}
