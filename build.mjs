import ParcelCore from "@parcel/core";
import { createRequire } from "module";
import path from "path";

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const { default: Parcel } = ParcelCore; // TODO

const __dirname = dirname(fileURLToPath(import.meta.url));

let bundler = new Parcel({
    entries: path.join(__dirname, "/index.mjs"),
    defaultConfig: createRequire(import.meta.url).resolve( "@parcel/config-default"),
    defaultTargetOptions: {
        distDir: path.join(__dirname, "output"),
        engines: {
            "node": ">=14.x"
        },
        outputFormat: 'commonjs',
        shouldOptimize: false,
        isLibrary: false,
        shouldScopeHoist: false,
        sourceMap: false
    },
    mode: "production",
});

await bundler.run();