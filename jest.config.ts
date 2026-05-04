import fs from 'fs';
import path from 'path';
import { pathsToModuleNameMapper, type JestConfigWithTsJest } from 'ts-jest';

const tsconfigPath = path.resolve('./tsconfig.json');
const tsconfigContent = fs.readFileSync(tsconfigPath, 'utf-8');
const { compilerOptions } = JSON.parse(tsconfigContent);

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  setupFiles: ['<rootDir>/jest.polyfills.ts'],
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'mjs', 'json'],
  moduleNameMapper: {
    ...(compilerOptions.paths
      ? pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
      : {}),
    '\\.css$': '<rootDir>/src/__mocks__/fileMock.cjs',
    '^react-helmet-async$': '<rootDir>/src/__mocks__/react-helmet-async.tsx',
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true, tsconfig: './tsconfig.test.json' }],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
    '!**/__tests__/**/test-data/**/*.[jt]s?(x)',
    '!<rootDir>/tests/**',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/__mocks__/**',
    '!src/main.tsx',
    '!<rootDir>/tests/**',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/__tests__/', 'index.ts', '@types'],
  coverageReporters: ['json', 'text', 'text-summary', 'json-summary', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default config;
