import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^styled-system/(.*)$': '<rootDir>/styled-system/$1',
    '\\.css$': '<rootDir>/src/__mocks__/fileMock.cjs',
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true, tsconfig: './tsconfig.test.json' }],
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
}

export default config
