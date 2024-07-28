import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arrOfClass = [];
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  arrOfClass.push(room1, room2, room3);
  return arrOfClass;
}
