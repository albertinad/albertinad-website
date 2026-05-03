import { hexToRgb } from '../colors';

describe('hexToRgb', () => {
  it('converts black to [0, 0, 0]', () => {
    expect(hexToRgb('#000000')).toEqual([0, 0, 0]);
  });

  it('converts white to [255, 255, 255]', () => {
    expect(hexToRgb('#ffffff')).toEqual([255, 255, 255]);
  });

  it('converts uppercase hex', () => {
    expect(hexToRgb('#FF5733')).toEqual([255, 87, 51]);
  });

  it('converts the project accent color #22c55e', () => {
    expect(hexToRgb('#22c55e')).toEqual([34, 197, 94]);
  });

  it('converts a mixed lowercase color', () => {
    expect(hexToRgb('#aabbcc')).toEqual([170, 187, 204]);
  });
});
