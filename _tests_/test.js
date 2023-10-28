import healthAlarm from '../src/js/healthy';
import sortYourTeam from '../src/js/sort';

test.each(
    [
        ['Маг', 90, 'healthy'],
        ['Эльф', 52, 'healthy'],
        ['Друид', 50, 'wounded'],
        ['Воин', 10, 'critical'],
      ],
)(('testing health status'), (race, health, expected) => {
   const result = healthAlarm({ race, health });
   expect(result).toBe(expected);
  });

test('sort test', () => {
    const yourTeam = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
      ];
      const result = sortYourTeam(yourTeam);
      expect(result).toEqual([
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
      ]);
});
