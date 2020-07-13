import { firestore } from './firebase.utils';

export const saveSchedule = async (schedule, currentUserId, displayName) => {
  if(!schedule || !currentUserId) return;

  const schedRef = firestore.collection('host').doc('schedule');

  const savedAt = new Date();

  try {
    await schedRef.set({
      savedAt,
      savedBy: {currentUserId, displayName},
      purchaseOrders: schedule
    })
  } catch (error) {
    console.log(error)
  }
}

export const getSchedule = async () => {
  const schedRef = firestore.doc('host/schedule');

  let schedule;

  try {
    schedule = await (await schedRef.get()).data()
  } catch (error) {
    console.log(error);
  }

  return schedule
}

export const getLoads = async () => {
  const loadsRef = firestore.doc('host/loads');

  let loads;

  try {
    loads = await (await loadsRef.get()).data();
  } catch (error) {
    console.log(error);
  }

  return loads;
}

// const saveLoads = async () => {

// }