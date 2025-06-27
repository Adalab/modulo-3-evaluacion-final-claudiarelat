
export const getHouseClass = (house) => {
  switch ((house || '').toLowerCase()) {
    case 'gryffindor':
      return 'gryffindor';
    case 'hufflepuff':
      return 'hufflepuff';
    case 'ravenclaw':
      return 'ravenclaw';
    case 'slytherin':
      return 'slytherin';
    default:
      return 'Unknown';
  }
};

export const getHouseIcon = (house) => {
  switch ((house || '').toLowerCase()) {
    case 'gryffindor':
      return '🦁';
    case 'hufflepuff':
      return '🦡';
    case 'ravenclaw':
      return '🦅';
    case 'slytherin':
      return '🐍';
    default:
      return '❓';
  }
};
