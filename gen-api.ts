import * as fs from 'fs';
import * as dotenv from 'dotenv';
import openapiTS from 'openapi-typescript';

dotenv.config();

async function generate() {
  const output = await openapiTS('openapi/api.json');
  fs.writeFileSync('src/shared/api/kinopoiskDev/api-scheme.ts', output);
}

generate();
