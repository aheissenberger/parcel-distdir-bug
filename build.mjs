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
    targets: {
        main: {
            distDir:path.join(__dirname, "output"),
        }
    },
    defaultTargetOptions: {
        distDir: path.join(__dirname, "output"),
    },
    mode: "production",
});

await bundler.run();