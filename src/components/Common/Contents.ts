export const SkillTypeList = {
  Front: "Frontend",
  Back: "Backend",
  Dev: "Dev tools",
} as const;

export type SkillType = (typeof SkillTypeList)[keyof typeof SkillTypeList];

export type SkillCardContent = {
  img: string;
  name: string;
  color: string;
  type: SkillType;
  about: string;
  description?: string;
};

export const skillList: SkillCardContent[] = [
  {
    img: "/assets/stack-icons/cplusplus.png",
    name: "C++",
    color: "#00599C",
    type: SkillTypeList.Back,
    about: "主にロボット制御プログラムの作成に使用",
  },
  {
    img: "/assets/stack-icons/python.png",
    name: "Python",
    color: "#3776AB",
    type: SkillTypeList.Back,
    about: "主にデータ解析や機械学習に使用",
  },
  {
    img: "/assets/stack-icons/javascript.png",
    name: "JavaScript",
    color: "#F7DF1E",
    type: SkillTypeList.Front,
    about: "主にウェブ開発に使用",
    description: "動的コンテンツの作成、サーバーサイド開発(Node.js)などで利用",
  },
  {
    img: "/assets/stack-icons/typescript.png",
    name: "TypeScript",
    color: "#3178C6",
    type: SkillTypeList.Front,
    about: "主にウェブ開発に使用",
  },
  {
    img: "/assets/stack-icons/html5.png",
    name: "HTML",
    color: "#E34F26",
    type: SkillTypeList.Front,
    about: "主にウェブ開発に使用",
  },
  {
    img: "/assets/stack-icons/css.png",
    name: "CSS",
    color: "#663399",
    type: SkillTypeList.Front,
    about: "主にウェブ開発に使用",
  },
  {
    img: "/assets/stack-icons/react.png",
    name: "React",
    color: "#61DAFB",
    type: SkillTypeList.Front,
    about: "主にウェブ開発に使用",
  },
  {
    img: "/assets/stack-icons/elixir.png",
    name: "Elixir",
    color: "#4B275F",
    type: SkillTypeList.Back,
    about: "主にウェブ開発に使用",
  },
  {
    img: "/assets/stack-icons/git.png",
    name: "Git",
    color: "#F05032",
    type: SkillTypeList.Dev,
    about: "主にバージョン管理に使用",
  },
  {
    img: "/assets/stack-icons/github.png",
    name: "GitHub",
    color: "#181717",
    type: SkillTypeList.Dev,
    about: "主にバージョン管理に使用",
  },
];

export type ProjectContent = {
  name: string;
  about: string;
  description?: string;
  link: string;
  thumbnail: string;
  imgs?: string[];
  techs: string[];
};

export const projectList: ProjectContent[] = [
  {
    name: "NullTasker",
    about: "チーム向け総合タスク管理システム",
    description:
      "チームのタスク管理を効率化することを目的とした、オープンソースのタスク管理ツールです。 メンバー間でタスクの割り当てや進捗状況の共有が簡単に行えます。",
    link: "https://github.com/Team-Nullpo/NullTasker",
    thumbnail: "/assets/NullTasker.png",
    imgs: [
      "/assets/project-screenshots/nulltasker-login.png",
      "/assets/project-screenshots/nulltasker-task.png",
      "/assets/project-screenshots/nulltasker-calendar.png",
    ],
    techs: ["HTML", "CSS", "JavaScript", "Node.js"],
  },
  {
    name: "Train Info Board",
    about: "APIを通じて列車案内板を表示するツール",
    link: "https://colab.research.google.com/drive/1DtQIWg34rP2i_r0hwOCLPYTyFxwjilA7?usp=sharing",
    thumbnail: "/null.png",
    imgs: [
      "/assets/project-screenshots/train-1.png",
      "/assets/project-screenshots/train-2.png",
      "/assets/project-screenshots/train-3.png",
    ],
    techs: ["Python", "Colab"],
  },
  {
    name: "PR Issue Notifier",
    about: "GitHubのPRに関連するIssueを通知するツール",
    link: "https://github.com/NekoChan9382/pr-issue-notification",
    thumbnail: "/null.png",
    imgs: ["/assets/project-screenshots/pr-1.png"],
    techs: ["Elixir", "GitHub"],
  },
];

export type CareerItemContent = {
  date: string;
  title: string;
  description: string;
};

export const careerList: CareerItemContent[] = [
  {
    date: "2024.04",
    title: "大阪公立大学工業高等専門学校 入学",
    description: "",
  },
  {
    date: "2024.05",
    title: "ろぼっと倶楽部 入部",
    description: "制御班としてロボットのプログラム作成に従事",
  },
  {
    date: "2024.09",
    title: "第14回キャチロボバトルコンテスト 出場",
    description: "Aチーム操縦を担当 予選敗退TT",
  },
  {
    date: "2025.03",
    title: "関西春ロボコン2025 出場",
    description: "Bチーム操縦を担当 予選敗退TT",
  },
  {
    date: "2025.04",
    title: "知能情報コース 配属",
    description: "情報系の専門分野を重点的に学習するコースに配属",
  },
  {
    date: "2025.09",
    title: "高専ロボコン2025 出場",
    description: "Bチーム操縦を担当 田中貴金属グループ賞受賞",
  },
];
