export const idTodepartment = (id) => {
  switch (id) {
    case 1:
      return 'Civil Department';
    case 2:
      return 'CSE Department';
    case 4:
      return 'EEE Department';
    case 3:
      return 'ECE Department';
    case 5:
      return 'MMT Department';
    case 6:
      return 'MECH Department';
    default:
      return "";
  }
};
