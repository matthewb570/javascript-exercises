const findTheOldest = function(people) {
    return people.reduce((currentOldest, nextPerson) => {

        let currentOldestAge = "yearOfDeath" in currentOldest ?
            currentOldest.yearOfDeath - currentOldest.yearOfBirth :
            new Date().getFullYear() - currentOldest.yearOfBirth;
        
        let nextPersonAge = "yearOfDeath" in nextPerson ? 
            nextPerson.yearOfDeath - nextPerson.yearOfBirth :
            new Date().getFullYear() - nextPerson.yearOfDeath;
        
        if (currentOldestAge >= nextPersonAge) {
            return currentOldest;
        } else {
            return nextPerson;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
