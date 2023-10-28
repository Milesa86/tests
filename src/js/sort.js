  export default function sortYourTeam(yourTeam) {
    return yourTeam.sort((a, b) => {
        if (a.health < b.health) {
            return 1;
        }
            return -1;
        });
      }
