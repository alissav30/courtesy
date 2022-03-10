
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


export const moods = ['confused', 'productive', 'stressed', 'overwhelmed', 'encouraged', 'prepared', 'optimistic', 'content', 'frustrated', 'nervous', 'other...'];


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

export let courtDatePosts = [
  {
    title: 'How do I know what my court date is for sure?',
    description: '',
    upvotes: 40,
    comments: []
  },
  {
    title: 'Does anyone know what I should do if I need to push my court date back?',
    description: '',
    upvotes: 5,
    comments: []
  },
  {
    title: 'Need help figuring out my court date - can anyone help?',
    description: '',
    upvotes: 16,
    comments: []
  },
  {
    title: 'Can anyone give me advice on this issue with my court date?',
    description: '',
    upvotes: 52,
    comments: []
  },
  {
    title: 'How to check court date without summons handy?',
    description: '',
    upvotes: 2,
    comments: []
  }
];

export let contactCourtPosts = [
  {
    title: 'Where do I find which phone number to use to contact my courthouse?',
    description: '',
    upvotes: 35,
    comments: ['I have a phone number on my court summons', 'I was able to just Google it']
  },
  {
    title: 'What should I do if I need to contact my courthouse but no one is answering?',
    description: '',
    upvotes: 3,
    comments: ['You could try emailing them?', 'Can you find the phone number of the court clerk?', 'This happened to me so I just went in person']
  },
  {
    title: 'Need help contacting my courthouse - can anyone help?',
    description: '',
    upvotes: 11,
    comments: ['Do you have a phone number to call?', 'Sometimes I think it\'s better to find the email of your court clerk']
  },
  {
    title: 'Can anyone give me advice on this issue w/ contacting my courthouse?',
    description: '',
    upvotes: 34,
    comments: []
  },
  {
    title: 'What’s the best method to contact the court?',
    description: '',
    upvotes: 1,
    comments: []
  }
];

export let legalHelpPosts = [
  {
    title: 'Does anyone have any advice on how to self-represent?',
    description: '',
    upvotes: 13,
    comments: []
  },
  {
    title: 'How should I pick a lawyer?',
    description: '',
    upvotes: 4,
    comments: []
  },
  {
    title: 'Can anyone help me find a lawyer in my area?',
    description: '',
    upvotes: 14,
    comments: []
  },
  {
    title: 'Would love to hear stories from people who self-represented',
    description: '',
    upvotes: 28,
    comments: []
  },
  {
    title: 'Trying to find a lawyer on a budget...any advice?',
    description: '',
    upvotes: 1,
    comments: []
  },
  {
    title: 'How can I get pro bono legal representation?',
    description: '',
    upvotes: 1,
    comments: []
  }
];

export let transportationPosts = [
  {
    title: 'No car but need to get to court tomorrow - any recommendations?',
    description: '',
    upvotes: 25,
    comments: []
  },
  {
    title: 'Has anyone had good experiences taking public transport to court?',
    description: '',
    upvotes: 8,
    comments: []
  },
  {
    title: 'Trying to figure out when I need to leave my house for court...how early should I get there',
    description: '',
    upvotes: 10,
    comments: []
  },
  {
    title: 'Is taking an Uber more reliable than public transport?',
    description: '',
    upvotes: 17,
    comments: []
  },
  {
    title: 'No car and no money for an Uber what should I do',
    description: '',
    upvotes: 9,
    comments: []
  }
];

export let testimonialPosts = [
  {
    title: 'Just got back from my court appointment and want to share my experience!',
    description: '',
    upvotes: 21,
    comments: []
  },
  {
    title: 'Want to share some words of support and advice to everyone going through this process',
    description: '',
    upvotes: 33,
    comments: []
  },
  {
    title: 'Hang in there guys!',
    description: '',
    upvotes: 19,
    comments: []
  },
  {
    title: 'Sending everyone love and support as they go through this :)',
    description: '',
    upvotes: 7,
    comments: []
  },
  {
    title: 'My court story - hopefully you guys can learn from my experience!',
    description: '',
    upvotes: 12,
    comments: []
  }
];

export let otherPosts = [
  {
    title: 'Is it ok to bring my kids with me to court?',
    description: 'Hi guys! I have two kids (ages 5 and 7) and I cannot find anyone to watch them during my court appointment tomorrow. Is it ok to bring them with me?',
    upvotes: 4,
    comments: []
  },
  {
    title: 'Don\'t know where my court summons is - do I need it?',
    description: 'Lost my court summons a few days ago...could this pose a problem at all in the future?',
    upvotes: 13,
    comments: []
  },
  {
    title: 'How early should I get to court?',
    description: 'I\'m trying to figure out how early I should leave my house for court tomorrow...how early should I get to the courthouse? Is it ok to get there just a few minutes before?',
    upvotes: 9,
    comments: []
  },
  {
    title: 'Should I bring food with me?',
    description: 'My court appointment is at 11:00am and I think I\'ll probably get hungry for lunch pretty quickly. Is it ok to bring food with me? Will they break for lunch at a certain point?',
    upvotes: 16,
    comments: []
  },
  {
    title: 'What happens if I can\'t make it to my appointment?',
    description: 'Hi everyone. It\'s starting to look like I might not be able to make it to my court appointment. Does anyone know what the consequences are if I don\'t show up?',
    upvotes: 1,
    comments: []
  },
  {
    title: 'Just got back from my court appointment and want to share my experience!',
    description: '',
    upvotes: 21,
    comments: []
  },
  {
    title: 'Want to share some words of support and advice to everyone going through this process',
    description: '',
    upvotes: 33,
    comments: []
  },
  {
    title: 'Hang in there guys!',
    description: '',
    upvotes: 19,
    comments: []
  },
  {
    title: 'Sending everyone love and support as they go through this :)',
    description: '',
    upvotes: 7,
    comments: []
  },
  {
    title: 'My court story - hopefully you guys can learn from my experience!',
    description: '',
    upvotes: 12,
    comments: []
  }
];
