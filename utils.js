
// returns the number of days until the user's courtdate
//
// param: courtDate should be given as Date object
export function getCountdownDays(courtDate) {
  const today = new Date();

  // To calculate the time difference of two dates
  const differenceInTime = courtDate.getTime() - today.getTime();

  // To calculate the no. of days between two dates
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return Math.ceil(differenceInDays);
}


export const moods = ['productive', 'confused', 'stressed', 'encouraged', 'overwhelmed', 'prepared', 'frustrated', 'content', 'optimistic', 'nervous', 'other...'];


/*  Dictionary to control customization of the home screen
 *   headerText: phrase to follow "Today you're feeling [mood]"
 *   taskText: action item to go into center module
 *   taskRoute: url route to where the user is taken if they click on the action item
 */
export const homeScreenMoods = {
  default: {
    taskText: "Check the tasks screen to see what needs to be done today.",
    taskRoute: "Tasks",
  },
  confused: {
    headerText: "- we hear you.",
    taskText: "Have a question about court? Go to the message board to ask.",
    taskRoute: "Forum",
  },
  stressed: {
    headerText: "- we hear you.",
    taskText: "Take some time today to read a few testimonials. You’ve got this!",
    taskRoute: "Forum",
  },
  productive: {
    headerText: "- woohoo!",
    taskText: "Use that productivity to get started on your task for the day!",
    taskRoute: "Tasks",
  },
  encouraged: {
    headerText: "- woohoo!",
    taskText: "Use that positivity to get started on your task for the day!",
    taskRoute: "Tasks",
  },
  prepared: {
    headerText: "- woohoo!",
    taskText: "Check the tasks screen to make sure you're all caught up on things to do.",
    taskRoute: "Tasks",
  },
  overwhelmed: {
    headerText: "- we hear you.",
    taskText: "Take some time today to read a few testimonials. You’ve got this!",
    taskRoute: "Forum",
  },
  frustrated: {
    headerText: "- we hear you.",
    taskText: "Have a question about court? Go to the message board to ask.",
    taskRoute: "Forum",
  },
  optimistic: {
    headerText: "- woohoo!",
    taskText: "Use that positivity to get started on your task for the day!",
    taskRoute: "Tasks",
  },
  content: {
    headerText: "- woohoo!",
    taskText: "Check the tasks screen to make sure you're all caught up on things to do.",
    taskRoute: "Tasks",
  },
  nervous: {
    headerText: "- we hear you.",
    taskText: "Take some time today to read a few testimonials. You’ve got this!",
    taskRoute: "Forum",
  },
  other: {
    headerText: "",
    taskText: "Check the tasks screen to make sure you're all caught up on things to do.",
    taskRoute: "Tasks",
  }
};
