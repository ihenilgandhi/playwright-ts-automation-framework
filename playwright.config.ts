import { defineConfig } from '@playwright/test';
import config from './config/config';

export default defineConfig({
    testDir: './tests',

    use: {
        baseURL: config.baseUrl
    }
});