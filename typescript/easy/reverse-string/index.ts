/**
  Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const tmp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = tmp;
  }
}
