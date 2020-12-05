export default class StringService {
  trim(stringToTrim, characterToTrimBy) {
    var start = 0,
      end = stringToTrim.length;

    while (start < end && stringToTrim[start] === characterToTrimBy) ++start;

    while (end > start && stringToTrim[end - 1] === characterToTrimBy) --end;

    return start > 0 || end < stringToTrim.length
      ? stringToTrim.substring(start, end)
      : stringToTrim;
  }
}
