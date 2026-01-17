import React, { useState, useEffect } from "react";
import "./Challenge.css";

import Navbar from "../../components/dashboard/Navbar/Navbar";

const sections = [
  {
    id: 1,
    title: "Daily Steps",
    image:
      "https://i.pinimg.com/originals/2c/45/70/2c45708d2bbd0a6b2e9b4c9b7020a073.jpg",
    total: 28,
  },
  {
    id: 2,
    title: "Hydration",
    image:
      "https://th.bing.com/th/id/R.8567d93bc8bfc403613c0d3cb3e9d327?rik=%2fi7vdWQiCrsG4g&pid=ImgRaw&r=0",
    total: 22,
  },
  {
    id: 3,
    title: "Meditation",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.JgeHMKd4VKEjBoCfXaZKkQHaF-?rs=1&pid=ImgDetMain&o=7&rm=3",
    total: 35,
  },
  {
    id: 4,
    title: "Yoga",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.XFmkLnXrpwET8SGpRn925wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    total: 30,
  },
  {
    id: 5,
    title: "Workout",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.SgerZ1ZYjr_k77iB7v7-dwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    total: 32,
  },
  {
    id: 6,
    title: "Sleep Better",
    image:
      "https://img.freepik.com/premium-vector/people-are-sleeping-simple-flat-design-style_995281-10704.jpg",
    total: 25,
  },
  {
    id: 7,
    title: "Mindfulness",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.Ze2wqsQg24tMZ_PWI9c2FwHaHn?rs=1&pid=ImgDetMain&o=7&rm=3",
    total: 29,
  },
  {
    id: 8,
    title: "Running",
    image:
      "https://img.freepik.com/premium-photo/close-up-view-diverse-runners-feet-charity-marathon_1220676-22592.jpg",
    total: 26,
  },
  {
    id: 9,
    title: "Strength Training",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.rhmJ2je_jl4pBEVeKVcmgQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    total: 31,
  },
  {
    id: 10,
    title: "Healthy Eating",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.jIEJmk2dxDaQKqxZINEtsQHaE1?rs=1&pid=ImgDetMain&o=7&rm=3",
    total: 33,
  },
  {
    id: 11,
    title: "Stretching",
    image:
      "https://cdn.lifehack.org/wp-content/uploads/2018/09/static-stretches.jpg",
    total: 20,
  },
  {
    id: 12,
    title: "Breathing Exercises",
    image:
      "https://static.vecteezy.com/system/resources/previews/016/220/643/original/isolated-of-a-woman-meditating-and-breathing-exercise-illustration-in-flat-style-vector.jpg",
    total: 24,
  },
  {
    id: 13,
    title: "Cycling",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.4r9yDKzRLFYHZf8g0KC_pQHaEv?rs=1&pid=ImgDetMain&o=7&rm=3",
    total: 19,
  },
  {
    id: 14,
    title: "Weight Loss",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.tYSsViY3N-sGiNa7RNjSzAHaF7?rs=1&pid=ImgDetMain&o=7&rm=3",
    total: 34,
  },
  {
    id: 15,
    title: "Posture Correction",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.1LeGbf3NDM7YY5lrueV4zgHaFZ?rs=1&pid=ImgDetMain&o=7&rm=3",
    total: 18,
  },
  {
    id: 16,
    title: "Walking",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.HCBe6yaqPRSmM3hUtdlZdwHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
    total: 27,
  },
  {
    id: 17,
    title: "Cardio",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.AugFEhUsLpHRit7RYRiZXwHaE0?rs=1&pid=ImgDetMain&o=7&rm=3",
    total: 23,
  },
  {
    id: 18,
    title: "Flexibility",
    image:
      "https://cdn.lifehack.org/wp-content/uploads/2018/09/static-stretches.jpg",
    total: 21,
  },
  {
    id: 19,
    title: "Core Strength",
    image:
      "https://tse1.explicit.bing.net/th/id/OIP.eXJqp7iKoqUsTOOvtgl0ZAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    total: 26,
  },
  {
    id: 20,
    title: "Morning Routine",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.UWwtob9VYrdq1QhmUXJdKwHaEO?w=1006&h=575&rs=1&pid=ImgDetMain&o=7&rm=3",
    total: 30,
  },
];

const sectionChallenges = {
  "Daily Steps": [
    {
      name: "10,000 Steps Daily",
      desc: "Walk 10k steps every day",
      Points: 80,
      difficulty: "Medium",
      users: 22.2,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.UWwtob9VYrdq1QhmUXJdKwHaEO?w=1006&h=575&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Morning Walk",
      desc: "30 mins walk before 9 AM",
      Points: 60,
      difficulty: "Easy",
      users: 10,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.v7HGNrg6mn4LGN8AeDqNMwHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Weekend Warrior",
      desc: "15k steps on weekend",
      Points: 120,
      difficulty: "Hard",
      users: 12,
      image:
        "https://tse1.explicit.bing.net/th/id/OIP.eXJqp7iKoqUsTOOvtgl0ZAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Step Streak",
      desc: "7 days 10k+ steps",
      Points: 200,
      difficulty: "Hard",
      users: 14.6,
      image:
        "https://cdn.lifehack.org/wp-content/uploads/2018/09/static-stretches.jpg",
    },
    {
      name: "Lunch Break Walk",
      desc: "20 mins walk during lunch",
      Points: 50,
      difficulty: "Easy",
      users: 112,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.AugFEhUsLpHRit7RYRiZXwHaE0?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Night Walk",
      desc: "Walk after dinner",
      Points: 70,
      difficulty: "Easy",
      users: 33,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.HCBe6yaqPRSmM3hUtdlZdwHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Double Day",
      desc: "20,000 steps in one day",
      Points: 300,
      difficulty: "Hard",
      users: 15.6,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.HCBe6yaqPRSmM3hUtdlZdwHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Park Walk",
      desc: "Walk in a park",
      Points: 65,
      difficulty: "Easy",
      users: 44.9,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.4r9yDKzRLFYHZf8g0KC_pQHaEv?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Stair Master",
      desc: "Take stairs instead of lift",
      Points: 90,
      difficulty: "Medium",
      users: 12,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.rhmJ2je_jl4pBEVeKVcmgQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Step Leader",
      desc: "Be #1 in friends leaderboard",
      Points: 250,
      difficulty: "Hard",
      users: 5,
      image:
        "https://tse1.explicit.bing.net/th/id/OIP.eXJqp7iKoqUsTOOvtgl0ZAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ],
  Hydration: [
    {
      name: "8 Glasses Daily",
      desc: "Drink 8 glasses of water",
      Points: 50,
      difficulty: "Easy",
      users: 98.4,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.UWwtob9VYrdq1QhmUXJdKwHaEO?w=1006&h=575&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Hydration Streak",
      desc: "7 days without missing",
      Points: 150,
      difficulty: "Medium",
      users: 47.3,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.v7HGNrg6mn4LGN8AeDqNMwHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Morning Water",
      desc: "2 glasses first thing",
      Points: 40,
      difficulty: "Easy",
      users: 62.1,
      image:
        "https://tse1.explicit.bing.net/th/id/OIP.eXJqp7iKoqUsTOOvtgl0ZAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "No Soda Week",
      desc: "Replace soda with water",
      Points: 180,
      difficulty: "Hard",
      users: 15.9,
      image:
        "https://cdn.lifehack.org/wp-content/uploads/2018/09/static-stretches.jpg",
    },
    {
      name: "Infused Water",
      desc: "Add fruits to water",
      Points: 70,
      difficulty: "Easy",
      users: 33.8,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.AugFEhUsLpHRit7RYRiZXwHaE0?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Water Reminder",
      desc: "Set hourly reminders",
      Points: 60,
      difficulty: "Easy",
      users: 20.4,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.HCBe6yaqPRSmM3hUtdlZdwHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "3L Challenge",
      desc: "Drink 3 liters daily",
      Points: 200,
      difficulty: "Hard",
      users: 11.7,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.HCBe6yaqPRSmM3hUtdlZdwHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Before Meals",
      desc: "Glass of water before every meal",
      Points: 90,
      difficulty: "Medium",
      users: 42.9,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.4r9yDKzRLFYHZf8g0KC_pQHaEv?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Hydration Tracker",
      desc: "Log water in app",
      Points: 50,
      difficulty: "Easy",
      users: 58.2,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.rhmJ2je_jl4pBEVeKVcmgQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Zero Dehydration",
      desc: "Never feel thirsty",
      Points: 250,
      difficulty: "Hard",
      users: 6.4,
      image:
        "https://tse1.explicit.bing.net/th/id/OIP.eXJqp7iKoqUsTOOvtgl0ZAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ],
  Meditation: [
    {
      name: "10 Min Daily",
      desc: "Meditate every morning",
      Points: 80,
      difficulty: "Medium",
      users: 31.7,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.v7HGNrg6mn4LGN8AeDqNMwHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Breath Focus",
      desc: "5 mins breath awareness",
      Points: 50,
      difficulty: "Easy",
      users: 52.4,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.UWwtob9VYrdq1QhmUXJdKwHaEO?w=1006&h=575&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "30-Day Calm",
      desc: "Daily guided session",
      Points: 400,
      difficulty: "Hard",
      users: 9.2,
      image:
        "https://cdn.lifehack.org/wp-content/uploads/2018/09/static-stretches.jpg",
    },
    {
      name: "Body Scan",
      desc: "Full body relaxation",
      Points: 90,
      difficulty: "Medium",
      users: 28.6,
      image:
        "https://tse1.explicit.bing.net/th/id/OIP.eXJqp7iKoqUsTOOvtgl0ZAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Loving Kindness",
      desc: "Metta meditation",
      Points: 120,
      difficulty: "Medium",
      users: 19.8,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.4r9yDKzRLFYHZf8g0KC_pQHaEv?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Sleep Meditation",
      desc: "Before bed routine",
      Points: 100,
      difficulty: "Easy",
      users: 43.1,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.AugFEhUsLpHRit7RYRiZXwHaE0?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Mindful Eating",
      desc: "Eat without distraction",
      Points: 70,
      difficulty: "Easy",
      users: 38.4,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.HCBe6yaqPRSmM3hUtdlZdwHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Gratitude Practice",
      desc: "3 things you're grateful for",
      Points: 60,
      difficulty: "Easy",
      users: 48.7,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.rhmJ2je_jl4pBEVeKVcmgQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Walking Meditation",
      desc: "Mindful walking",
      Points: 110,
      difficulty: "Medium",
      users: 25.3,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.HCBe6yaqPRSmM3hUtdlZdwHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Zen Master",
      desc: "20 mins silent meditation",
      Points: 300,
      difficulty: "Hard",
      users: 7.1,
      image:
        "https://tse1.explicit.bing.net/th/id/OIP.eXJqp7iKoqUsTOOvtgl0ZAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ],
  Yoga: [
    {
      name: "Sun Salutation",
      desc: "10 rounds daily",
      Points: 90,
      difficulty: "Medium",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.UWwtob9VYrdq1QhmUXJdKwHaEO?w=1006&h=575&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "30-Day Flow",
      desc: "Full sequence daily",
      Points: 350,
      difficulty: "Hard",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.v7HGNrg6mn4LGN8AeDqNMwHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Warrior Pose Hold",
      desc: "Hold for 2 mins",
      Points: 80,
      difficulty: "Medium",
      image:
        "https://tse1.explicit.bing.net/th/id/OIP.eXJqp7iKoqUsTOOvtgl0ZAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Downward Dog",
      desc: "Perfect form daily",
      Points: 60,
      difficulty: "Easy",
      image:
        "https://cdn.lifehack.org/wp-content/uploads/2018/09/static-stretches.jpg",
    },
    {
      name: "Headstand Practice",
      desc: "Build up to 1 min",
      Points: 400,
      difficulty: "Hard",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.AugFEhUsLpHRit7RYRiZXwHaE0?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Morning Yoga",
      desc: "15 mins routine",
      Points: 70,
      difficulty: "Easy",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.HCBe6yaqPRSmM3hUtdlZdwHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Evening Stretch",
      desc: "Relaxing flow",
      Points: 75,
      difficulty: "Easy",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.4r9yDKzRLFYHZf8g0KC_pQHaEv?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Partner Yoga",
      desc: "With friend/family",
      Points: 200,
      difficulty: "Medium",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.rhmJ2je_jl4pBEVeKVcmgQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Yoga Challenge",
      desc: "30 days nonstop",
      Points: 1000,
      difficulty: "Hard",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.HCBe6yaqPRSmM3hUtdlZdwHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Breath + Pose",
      desc: "Pranayama with asana",
      Points: 120,
      difficulty: "Medium",
      image:
        "https://tse1.explicit.bing.net/th/id/OIP.eXJqp7iKoqUsTOOvtgl0ZAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ],
  Workout: Array(10)
    .fill(null)
    .map((_, i) => ({
      name: `Workout Challenge ${i + 1}`,
      desc: "Complete daily workout",
      Points: 50 + i * 20,
      difficulty: ["Easy", "Medium", "Hard"][i % 3],
      image:
        "https://tse1.explicit.bing.net/th/id/OIP.eXJqp7iKoqUsTOOvtgl0ZAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    })),
  "Sleep Better": Array(10)
    .fill(null)
    .map((_, i) => ({
      name: `Sleep Routine ${i + 1}`,
      desc: "Follow bedtime routine",
      Points: 40 + i * 15,
      difficulty: i < 5 ? "Easy" : "Medium",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.rhmJ2je_jl4pBEVeKVcmgQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    })),
  ...Object.fromEntries(
    [
      "Mindfulness",
      "Running",
      "Strength Training",
      "Healthy Eating",
      "Stretching",
      "Breathing Exercises",
      "Cycling",
      "Weight Loss",
      "Posture Correction",
      "Walking",
      "Cardio",
      "Flexibility",
      "Core Strength",
      "Morning Routine",
    ].map((title) => [
      title,
      Array(10)
        .fill(null)
        .map((_, i) => ({
          name: `${title.split(" ")[0]} Challenge ${i + 1}`,
          desc: `Daily ${title.toLowerCase()} practice`,
          Points: Math.floor(Math.random() * 150) + 50,
          difficulty: ["Easy", "Medium", "Hard"][Math.floor(Math.random() * 3)],
          users: (Math.random() * 90 + 5).toFixed(1),
          image:
            sections.find((s) => s.title === title)?.image ||
            "https://tse3.mm.bing.net/th/id/OIP.UWwtob9VYrdq1QhmUXJdKwHaEO?w=1006&h=575&rs=1&pid=ImgDetMain&o=7&rm=3",
        })),
    ])
  ),
};

const allChallenges = [
  {
    id: 101,
    name: "Walk 10,000 Steps",
    desc: "Complete 10k steps today",
    reward: "50 Points + badge",
    image:
      "https://cdn.prod.website-files.com/5ced8705d73b74c21eb98107/688e8b662bad1f24495efb2e_walking-7000%20steps%20(1).webp",
  },
  {
    id: 102,
    name: "Drink 8 Glasses of Water",
    desc: "Stay hydrated all day",
    reward: "40 Points",
    image:
      "https://www.shutterstock.com/image-vector/water-balance-tracker-5-glasses-260nw-2290245357.jpg",
  },
  {
    id: 103,
    name: "10 Min Meditation",
    desc: "Calm your mind",
    reward: "60 Points",
    image:
      "https://media.istockphoto.com/id/1457842724/vector/stress-management-meditation-or-relaxation-to-reduce-anxiety-control-emotion-during-problem.jpg?s=612x612&w=0&k=20&c=idmSUfQdcLMywZpakXV5DXa5p24N3qAnvse62aMRD2g=",
  },
  {
    id: 104,
    name: "No Sugar Today",
    desc: "Avoid added sugar",
    reward: "80 Points",
    image:
      "https://thumbs.dreamstime.com/b/healthy-food-clean-eating-selection-fruit-vegetable-seeds-superfood-cereal-leaf-vegetable-wooden-background-healthy-food-143677456.jpg",
  },
  {
    id: 105,
    name: "30 Min Workout",
    desc: "Sweat it out!",
    reward: "70 Points",
    image:
      "https://media.istockphoto.com/id/1220576876/vector/set-of-men-and-women-exercise-at-home-using-the-house-as-a-gym.jpg?s=612x612&w=0&k=20&c=ylJbqVMOKB19H8OvNS1HAvgRTrtQhCeAitwGP6WdAjY=",
  },
  {
    id: 106,
    name: "Sleep Before 11 PM",
    desc: "Early to bed",
    reward: "50 Points",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.6vComWeSDJUmlgpr6OH2vQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];
 
const Challenge = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [currentView, setCurrentView] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [countdown, setCountdown] = useState("");
  const [weeklyCountdown, setWeeklyCountdown] = useState("");
  const [monthlyCountdown, setMonthlyCountdown] = useState("");

  const getTodayChallenge = () => {
    const today = new Date().toISOString().slice(0, 10);
    const index =
      Math.abs(today.split("").reduce((a, b) => a + b.charCodeAt(0), 0)) %
      allChallenges.length;
    return allChallenges[index];
  };

  const [todayChallenge] = useState(getTodayChallenge());

  const itemsPerPage = 10;
  const [dailyChallenges] = useState(() => {
    const shuffled = [...sections].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  });

  useEffect(() => {
    const updateAllCountdowns = () => {
      const now = new Date();

      // Daily countdown
      const tomorrow = new Date(now);
      tomorrow.setHours(24, 0, 0, 0);
      const dailyDiff = tomorrow - now;
      const dh = Math.floor(dailyDiff / (1000 * 60 * 60));
      const dm = Math.floor((dailyDiff % (1000 * 60 * 60)) / (1000 * 60));
      const ds = Math.floor((dailyDiff % (1000 * 60)) / 1000);
      setCountdown(`${dh}h ${dm}m ${ds}s`);

      // Weekly countdown (next Sunday)
      const dayOfWeek = now.getDay();
      const nextSunday = new Date(now);
      nextSunday.setDate(now.getDate() + (7 - dayOfWeek));
      nextSunday.setHours(0, 0, 0, 0);
      const weeklyDiff = nextSunday - now;
      const wd = Math.floor(weeklyDiff / (1000 * 60 * 60 * 24));
      const wh = Math.floor(
        (weeklyDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const wm = Math.floor((weeklyDiff % (1000 * 60 * 60)) / (1000 * 60));
      const ws = Math.floor((weeklyDiff % (1000 * 60)) / 1000);
      setWeeklyCountdown(`${wd}d ${wh}h ${wm}m ${ws}s`);

      // Monthly countdown
      const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      const monthlyDiff = nextMonth - now;
      const md = Math.floor(monthlyDiff / (1000 * 60 * 60 * 24));
      const mh = Math.floor(
        (monthlyDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mm = Math.floor((monthlyDiff % (1000 * 60 * 60)) / (1000 * 60));
      const ms = Math.floor((monthlyDiff % (1000 * 60)) / 1000);
      setMonthlyCountdown(`${md}d ${mh}h ${mm}m ${ms}s`);
    };

    updateAllCountdowns();
    const timer = setInterval(updateAllCountdowns, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filtered = sections.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* Challenges Full Page */}
      <Navbar />

        <section
          className="challenges-fullpage"
          style={{
            background: "linear-gradient(135deg, #ecfeff 0%, #ccfbf1 100%)",
            minHeight: "100vh",
          }}
        >
          <div
            className="container"
            style={{ paddingTop: "120px", minHeight: "100vh" }}
          >
            <h2 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
              Health Challenges
            </h2>
            <p className="section-subtitle">
              Choose a category and start your journey!
            </p>

            {/* Search Box */}
            <div className="modern-search-container">
              <div className="search-box">
                <span className="search-icon-inside">Search</span>
                <input
                  type="text"
                  placeholder="Search challenges... (Yoga, Water, Sleep...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  className="search-input-clean"
                />
              </div>
              {showSuggestions && searchTerm && (
                <div className="suggestions-box">
                  {sections
                    .filter((s) =>
                      s.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .slice(0, 8)
                    .map((section) => (
                      <div
                        key={section.id}
                        className="suggestion-item"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setSearchTerm(section.title);
                          setShowSuggestions(false);
                          setCurrentPage(1);
                        }}
                      >
                        <span className="sugg-icon">Search</span>
                        <span className="sugg-text">{section.title}</span>
                      </div>
                    ))}
                  {sections.filter((s) =>
                    s.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ).length === 0 && (
                    <div className="suggestion-item no-result">
                      No challenge found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Featured Challenges Grid */}
            <div className="featured-challenges-grid">
              {/* Today's Challenge */}
              <div className="daily-challenge-box today-special">
                <div className="daily-badge">Today's Challenge</div>
                <div className="daily-content">
                  <img
                    src={todayChallenge.image}
                    alt={todayChallenge.name}
                    className="daily-img"
                  />
                  <div className="daily-info">
                    <h3>{todayChallenge.name}</h3>
                    <p>{todayChallenge.desc}</p>
                    <div className="daily-reward">
                      Reward {todayChallenge.reward}
                    </div>
                  </div>
                </div>
                <div className="daily-footer">
                  <button className="daily-btn">Start Now</button>
                  <div className="daily-timer">
                    Ends in <span>{countdown}</span>
                  </div>
                </div>
              </div>

              {/* Weekly & Monthly Packs */}
              <div className="daily-challenge-box weekly-pack">
                <div className="daily-badge weekly">7-Day Pack</div>
                <div className="daily-content">
                  <img
                    src="https://tse3.mm.bing.net/th/id/OIP.e2Lp0kbijOeGBBgyh-xrhAHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Sleep"
                    className="daily-img"
                  />
                  <div className="daily-info">
                    <h3>7-Day Sleep Boost</h3>
                    <p>Improve sleep quality in just one week</p>
                    <div className="daily-reward">
                      Reward 600 Points + Badge
                    </div>
                  </div>
                </div>
                <div className="daily-footer">
                  <button className="daily-btn">Start Pack</button>
                  <div className="daily-timer">
                    Ends in <span>{weeklyCountdown}</span>
                  </div>
                </div>
              </div>

              <div className="daily-challenge-box monthly-pack">
                <div className="daily-badge monthly">30-Day Challenge</div>
                <div className="daily-content">
                  <img
                    src="https://images.unsplash.com/photo-1549570652-97324981a6fd?w=500"
                    alt="Weight Loss"
                    className="daily-img"
                  />
                  <div className="daily-info">
                    <h3>30-Day Weight Loss Journey</h3>
                    <p>Lose 4–8 kg safely with daily guidance</p>
                    <div className="daily-reward">
                      Reward 2500 Points + Trophy
                    </div>
                  </div>
                </div>
                <div className="daily-footer">
                  <button className="daily-btn">Join Now</button>
                  <div className="daily-timer">
                    Ends in <span>{monthlyCountdown}</span>
                  </div>
                </div>
              </div>

              {/* Top 6 Trending */}
              {allChallenges.slice(0, 6).map((ch, idx) => (
                <div
                  key={ch.id}
                  className={`daily-challenge-box top-variant color-${
                    (idx % 5) + 1
                  }`}
                >
                  <div className="daily-badge trending">
                    #{idx + 1} Trending
                  </div>
                  <div className="daily-content">
                    <img src={ch.image} alt={ch.name} className="daily-img" />
                    <div className="daily-info">
                      <h3>{ch.name}</h3>
                      <p>{ch.desc}</p>
                      <div className="daily-reward">Reward {ch.reward}</div>
                    </div>
                  </div>
                  <div className="daily-footer">
                    <button className="daily-btn">Join Now</button>
                  </div>
                </div>
              ))}
            </div>

            {/* All Categories */}
            <div className="all-sections-beautiful">
              {selectedSection ? (
                <div className="selected-section-challenges">
                  <button
                    className="back-btn-simple"
                    onClick={() => setSelectedSection(null)}
                  >
                    ← Back to Categories
                  </button>
                  <h2 className="section-challenges-title">
                    {selectedSection.title}
                  </h2>
                  <p className="section-challenges-count">
                    {selectedSection.total} Challenges • Earn up to 5000+ Points
                  </p>

                  <div className="challenges-grid-inside">
                    {(
                      sectionChallenges[selectedSection.title] ||
                      Array.from({ length: selectedSection.total }, (_, i) => ({
                        name: `${selectedSection.title} Challenge ${i + 1}`,
                        desc: `Complete this ${selectedSection.title.toLowerCase()} task daily`,
                        Points: Math.floor(Math.random() * 120) + 40,
                        difficulty: ["Easy", "Medium", "Hard"][i % 3],
                        image: selectedSection.image,
                      }))
                    ).map((ch, i) => (
                      <div
                        key={i}
                        className="premium-challenge-card"
                        onClick={() => setSelectedChallenge(ch)}
                      >
                        <img
                          src={ch.image}
                          alt={ch.name}
                          className="challenge-card-img"
                        />
                        <div className="challenge-card-content">
                          <div
                            className={`challenge-difficulty ${ch.difficulty.toLowerCase()}`}
                          >
                            {ch.difficulty}
                          </div>
                          <div className="challenge-users">
                            <span
                              className={`difficulty-tag ${ch.difficulty.toLowerCase()}`}
                            >
                              {ch.difficulty}
                            </span>
                            <span className="user-count">
                              {ch.users ? `${ch.users}K` : "12.5K"} Users
                            </span>
                          </div>
                          <h3>{ch.name}</h3>
                          <p>{ch.desc}</p>
                          <div className="challenge-Points">
                            Reward {ch.Points} Points
                          </div>
                          <button className="join-challenge-btn">
                            Join Challenge
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="all-sections-title">
                    All Challenge Categories
                  </h2>
                  <p className="all-sections-subtitle">
                    Browse 20+ health categories
                  </p>
                  <div className="beautiful-sections-grid">
                    {paginated.map((section) => (
                      <div
                        key={section.id}
                        className="beautiful-section-card"
                        onClick={() => setSelectedSection(section)}
                      >
                        <div className="beautiful-badge">
                          {section.total} Challenges
                        </div>
                        <img
                          src={section.image}
                          alt={section.title}
                          className="beautiful-img"
                        />
                        <div className="beautiful-overlay">
                          <h3>{section.title}</h3>
                          <p>Tap to view all challenges</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="beautiful-pagination">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                      const pageNum = i + Math.max(currentPage - 3, 1);
                      if (pageNum > totalPages) return null;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={currentPage === pageNum ? "active" : ""}
                        >
                          {pageNum}
                        </button>
                      );
                    }).filter(Boolean)}
                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

              <button
                className="btn-secondary back-home-btn"
                onClick={() => setCurrentView("home")}
                style={{
                  margin: "4rem auto",
                  display: "block",
                  padding: "1rem 3rem",
                }}
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </section>
      

      {selectedChallenge && (
        <div className="challenge-detail-modal">
          <div
            className="modal-overlay"
            onClick={() => setSelectedChallenge(null)}
          ></div>
          <div className="challenge-detail-card">
            <button
              className="close-modal"
              onClick={() => setSelectedChallenge(null)}
            >
              ×
            </button>
            <img
              src={selectedChallenge.image}
              alt={selectedChallenge.name}
              className="detail-img"
            />
            <div className="detail-content">
              <h2>{selectedChallenge.name}</h2>
              <div className="detail-badge">
                {selectedChallenge.difficulty} • {selectedChallenge.Points}{" "}
                Points
              </div>

              <div className="detail-section">
                <h3>How to Complete</h3>
                <ul>
                  <li>Daily 10,000 steps track করুন</li>
                  <li>Phone এর pedometer বা watch ব্যবহার করুন</li>
                  <li>App এ লগ করুন প্রতিদিন</li>
                </ul>
              </div>
              <div className="detail-section">
                <h3>Benefits You'll Get</h3>
                <p>
                  ওজন কমবে • হার্ট ভালো থাকবে • এনার্জি বাড়বে • মুড ভালো থাকবে
                </p>
              </div>
              <div className="detail-section warning">
                <h3>If You Skip</h3>
                <p>
                  ওজন বাড়তে পারে • ডায়াবেটিসের ঝুঁকি • ক্লান্তি • মুড খারাপ
                </p>
              </div>
              <div className="detail-section">
                <h3>User Feedback</h3>
                <div className="feedback">
                  <div className="feedback-item">
                    <div className="stars">★★★★★</div>
                    <p>"18kg কমিয়েছি 5 মাসে!" – Nayeem Islam</p>
                  </div>
                  <div className="feedback-item">
                    <div className="stars">★★★★☆</div>
                    <p>"এনার্জি লেভেল অনেক বেড়েছে" – Mehrab Hossain</p>
                  </div>
                </div>
              </div>
              <button className="big-join-btn">Start This Challenge Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Challenge;