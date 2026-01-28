function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isEligibleToVote(age) {
  return age >= 18;
}

// Common JS - default
// module.exports = getFullName;

// ES Module after changed type in json file
export default getFullName;
