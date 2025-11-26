import { useMediaQuery } from "react-responsive";

export const SkillTypeList = {
  Front: "Frontend",
  Back: "Backend",
  Dev: "Dev tools",
  Robo: "Robotics",
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
    description: "ロボ部でのロボット制御に使用しています",
  },
  {
    img: "/assets/stack-icons/python.png",
    name: "Python",
    color: "#3776AB",
    type: SkillTypeList.Back,
    about: "主にツール開発に使用",
    description:
      "ライブラリが充実しており、小さなツール作成などに気軽に使える言語として利用しています",
  },
  {
    img: "/assets/stack-icons/javascript.png",
    name: "JavaScript",
    color: "#F7DF1E",
    type: SkillTypeList.Front,
    about: "主にウェブ開発に使用",
    description:
      "動的コンテンツの作成、サーバーサイド開発(Node.js)などで利用しています",
  },
  {
    img: "/assets/stack-icons/typescript.png",
    name: "TypeScript",
    color: "#3178C6",
    type: SkillTypeList.Front,
    about: "主にウェブ開発に使用",
    description:
      "JavaScriptと比べて型安全性が高く、主にReact開発で好んで使用しています",
  },
  {
    img: "/assets/stack-icons/html5.png",
    name: "HTML",
    color: "#E34F26",
    type: SkillTypeList.Front,
    about: "主にウェブ開発に使用",
    description: "ウェブページの基本的な構造の作成に使用しています",
  },
  {
    img: "/assets/stack-icons/css.png",
    name: "CSS",
    color: "#663399",
    type: SkillTypeList.Front,
    about: "主にウェブ開発に使用",
    description: "ウェブページのデザインやレイアウトの作成に使用しています",
  },
  {
    img: "/assets/stack-icons/react.png",
    name: "React",
    color: "#61DAFB",
    type: SkillTypeList.Front,
    about: "主にウェブ開発に使用",
    description:
      "コンポーネントを用いたUI管理を行い、ウェブアプリケーションの開発に使用しています",
  },
  {
    img: "/assets/stack-icons/elixir.png",
    name: "Elixir",
    color: "#4B275F",
    type: SkillTypeList.Back,
    about: "主にツール開発に使用",
    description:
      "関数型言語の練習として使用し始めました。今後はNervesで組み込み開発にも挑戦する予定です",
  },
  {
    img: "/assets/stack-icons/git.png",
    name: "Git",
    color: "#F05032",
    type: SkillTypeList.Dev,
    about: "主にバージョン管理に使用",
    description: "ソースコードのバージョン管理に使用しています",
  },
  {
    img: "/assets/stack-icons/github.png",
    name: "GitHub",
    color: "#181717",
    type: SkillTypeList.Dev,
    about: "主にバージョン管理に使用",
    description:
      "ソースコードのバージョン管理や、GitHub Actionsを用いたCI/CDに利用しています",
  },
  {
    img: "/assets/stack-icons/ros.png",
    name: "ROS2",
    color: "#22314E",
    type: SkillTypeList.Robo,
    about: "主にロボット通信に使用",
    description:
      "ロボットとセンサー、コントローラーなどとの通信に使用しています",
  },
  // {
  //   img: "/assets/stack-icons/mbed.png",
  //   name: "mbed",
  //   color: "#008FBE",
  //   type: SkillTypeList.Robo,
  //   about: "主にマイコン制御に使用",
  //   description:
  //     "部のメインマイコンボードとして使用されている、STM32マイコンのプログラミングに使用しています",
  // },
  // {
  //   img: "/assets/stack-icons/arduino.png",
  //   name: "Arduino",
  //   color: "#00878F",
  //   type: SkillTypeList.Robo,
  //   about: "主にマイコン制御に使用",
  //   description:
  //     "部のサブマイコンボードとして使用されている、ArduinoやESP32のプログラミングに使用しています",
  // },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-plain.svg",
    name: "VSCode",
    color: "#007ACC",
    type: SkillTypeList.Dev,
    about: "主にコード編集に使用",
    description:
      "多くの言語に対応しており、拡張機能も豊富なため、主にコード編集に使用しています",
  },
  {
    img: "/assets/stack-icons/nodedotjs.png",
    name: "Node.js",
    color: "#5FA04E",
    type: SkillTypeList.Back,
    about: "主にサーバーサイドAPI開発、ビルドツールとして使用",
    description:
      "Webサーバーの構築や、ウェブアプリケーションのビルドに使用しています",
  },
];

export type ProjectContent = {
  id: string;
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
    id: "nulltasker",
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
    id: "train-info-board",
    name: "Train Info Board",
    about: "APIを通じて列車案内板を表示するツール",
    description:
      "PythonとGoogle Colabを使用して、鉄道の運行情報を取得し、列車案内板形式で表示するツールです。京急品川駅の時刻表を表示しています。APIから提供されているデータを使用することで、リアルタイムの運行情報を反映しています。また、UI作成にGradioを利用しており、視覚的にわかりやすいインターフェースを提供しています。",
    link: "https://colab.research.google.com/drive/1DtQIWg34rP2i_r0hwOCLPYTyFxwjilA7?usp=sharing",
    thumbnail: "/assets/train-info-board.png",
    imgs: [
      "/assets/project-screenshots/train-1.png",
      "/assets/project-screenshots/train-2.png",
      "/assets/project-screenshots/train-3.png",
    ],
    techs: ["Python", "Colab"],
  },
  {
    id: "pr-issue-notifier",
    name: "PR Issue Notifier",
    about: "GitHubのPRやIssueを通知するツール",
    description:
      "自身にアサインされたIssueやレビュー依頼されたPull Requestを通知するツールです。GitHub GraphQL APIを使用して、関連するIssueやPRの情報を取得し、通知を行います。今後に向けた練習のため、Elixirで実装を行いました。また、GitHub Actionsを使用して定期的に実行されるように設定しています。NullTaskerの開発時にレビューを投げても気づかれないことが多かったことをきっかけに、開発効率化の一環として作成しました。",
    link: "https://github.com/NekoChan9382/pr-issue-notification",
    thumbnail: "/assets/pr-issue-notifier.png",
    imgs: [
      "/assets/project-screenshots/pr-1.png",
      "/assets/project-screenshots/pr-2.png",
    ],
    techs: ["Elixir", "GitHub"],
  },
  {
    id: "portfolio",
    name: "Portfolio",
    about: "React+TypeScriptで作成したポートフォリオサイト(当サイト)",
    description:
      "私のポートフォリオサイトです。ReactとTypeScriptを使用しており、コンポーネントベースで設計されています。レスポンシブデザインを採用しており、様々なデバイスで快適に閲覧できます。また、適宜Reactのライブラリを活用して、アニメーションやインタラクティブな要素を実装しています。さらに、GitHub Actions, GitHub Pagesを使用して、CI/CDを実現しています。",
    link: "https://github.com/NekoChan9382/portfolio",
    thumbnail: "/assets/kanibaPigeon.jpg",
    imgs: ["/assets/project-screenshots/portfolio-1.png"],
    techs: ["React", "TypeScript", "CSS", "GitHub"],
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

export const getCSSVariable = (variableName: string): string => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
};

export const getBorderColor = () => getCSSVariable("--border-color");
export const getHoverColor = () => getCSSVariable("--hover-color");

const mobileWidth: number = 768;

export const useIsMobile = (): boolean => {
  return useMediaQuery({ query: `(max-width: ${mobileWidth}px)` });
};
