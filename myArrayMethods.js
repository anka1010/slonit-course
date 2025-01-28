//--------------------------------
function mySlice(arr, start = 0, end) {
  const newArr = [];

  if (start < 0) {
    start = arr.length + start;
  }

  if (!end) {
    end = arr.length;
  } else if (end < 0) {
    end = arr.length + end;
  }

  for (let i = start; i < end; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

//--------------------------------
function myIndexOf(arr = [], item, from = 0) {
  if (!item) return -1;

  if (from < 0 && from >= -arr.length) {
    from = arr.length + from;
  } else if (from < -arr.length) {
    from = 0;
  } else if (from >= arr.length) {
    return -1;
  }

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }

  return -1;
}

//--------------------------------
function myIncludes(arr = [], item, from = 0) {
  if (!item) return false;

  if (from < 0 && from >= -arr.length) {
    from = arr.length + from;
  } else if (from < -arr.length) {
    from = 0;
  } else if (from >= arr.length) {
    return false;
  }

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) return true;
  }

  return false;
}
