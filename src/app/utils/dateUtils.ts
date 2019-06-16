/**
 *
 * Contains Date Utility Functions
 *
 */


/**
 * Converts from string to Date
 * @param  s string
 * @returns Date
 */
export function parseDate(s): Date {
  const b = s.split(/\D/);
  return new Date(b[0], --b[1], b[2]);
}
