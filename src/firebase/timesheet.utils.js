import { firestore } from './firebase.utils';

export const saveTimePunch = async (currentUser, hours, minutes) => {
  if(!currentUser) return;

  const { id, lastPunchTime, lastPunchType} = currentUser
  
  const date = new Date();
  const time = date.getTime();

  let punchType;

  if(lastPunchTime && time - lastPunchTime < 60000) {
    console.log('no punch')
    return('Please wait')
  };

  lastPunchType === 'In' ? punchType = 'Out' : punchType = 'In';

  const userRef = firestore.collection('users').doc(id);

  const timesheetField = `timesheet.${time}`

  try {
    await userRef.update({
      [timesheetField]: {date: `${date.toDateString()}`, time: `${hours}:${minutes}`, type: punchType}, 
      lastPunchTime: time, 
      lastPunchType: punchType
    })
  } catch (error) {
    console.log(error)
  }
}

// export const getTimeCard = async (currentUser) => {
//   if(!currentUser) return;

//   const { id } = currentUser;

//   const date = new Date();
//   const time = date.getTime();
//   const today = date.toDateString();
//   const base = new Date(2020, 5, 12).getTime();
//   const oneDayInMilliseconds = 1000*60*60*24;
//   const payPeriodLength = 7 * oneDayInMilliseconds;
//   const payPeriodsSinceBase = (time - base)/payPeriodLength;
//   const payPeriodStart = new Date((Math.floor(payPeriodsSinceBase)*payPeriodLength)+base).toDateString();



//   // const snapShot = await ref.get();

//   // console.log(snapShot.get('timesheet'))

  

// }