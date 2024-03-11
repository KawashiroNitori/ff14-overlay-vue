import { completeIcon, statusData } from "./status";

export type KeigennType = "multiplier" | "absorbed";

export type PerformanceType = {
  physics: number;
  magic: number;
  darkness: number;
};

export type Keigenn = {
  id: number;
  fullIcon: string;
  type: KeigennType;
  performance: PerformanceType;
  isFriendly: boolean;
  name: string;
  description?: string;
};

const keigenns: (Omit<Keigenn, "fullIcon"> & { fullIcon?: string })[] = [
  {
    name: "铁壁",
    description: "减轻所受到的伤害",
    id: 1191,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "盾阵",
    description: "受到攻击时必定发动格挡",
    id: 1856,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "干预",
    description: "减轻所受到的伤害",
    id: 1174,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "预警",
    description: "减轻所受到的伤害",
    id: 74,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "武装",
    description: "减轻所受到的伤害",
    id: 1176,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "神圣领域",
    description: "除特定攻击之外其他所有攻击均无效化",
    id: 82,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "圣光幕帘",
    description: "抵消一定伤害",
    id: 1362,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "圣盾阵",
    description: "受到攻击时必定发动格挡",
    id: 2674,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "骑士的坚守",
    description: "减轻所受到的伤害",
    id: 2675,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "壁垒",
    description: "受到攻击时必定发动格挡",
    id: 77,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "原初的直觉",
    description: "自身发动战技命中时可以恢复体力，同时减轻所受到的伤害",
    id: 735,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "原初的勇猛",
    description: "自身发动战技命中时可以恢复体力",
    id: 1857,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "原初的武猛",
    description:
      "附加此效果的战士受到原初的勇猛的恢复体力的效果时，会获得相当于其100%的恢复效果\n另外受到攻击的伤害减少",
    id: 1858,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "战栗",
    description:
      "体力最大值提高\n习得战栗效果提高后追加效果：自身所受的治疗效果提高",
    id: 87,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "复仇",
    description: "受到攻击的伤害减少并且受到物理攻击时会发动反击",
    id: 89,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "摆脱",
    description: "抵消一定伤害",
    id: 1457,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "死斗",
    description:
      "除特定攻击之外其他所有对自身发动的攻击均无法令体力减少到1以下",
    id: 409,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "原初的血气",
    description: "自身发动战技命中时可以恢复体力，同时减轻所受到的伤害",
    id: 2678,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "原初的血潮",
    description: "减轻所受到的伤害",
    id: 2679,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "原初的血烟",
    description: "抵消一定伤害",
    id: 2680,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "至黑之夜",
    description: "抵消一定伤害",
    id: 1178,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "弃明投暗",
    description: "减轻所受到的魔法伤害",
    id: 746,
    type: "multiplier",
    performance: { physics: 0, magic: 1, darkness: 0 },
    isFriendly: true,
  },
  {
    name: "暗影墙",
    description: "减轻所受到的伤害",
    id: 747,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "暗黑布道",
    description: "减轻所受到的魔法伤害",
    id: 1894,
    type: "multiplier",
    performance: { physics: 0, magic: 1, darkness: 0 },
    isFriendly: true,
  },
  {
    name: "行尸走肉",
    description:
      "受到致命伤害时体力减为1，并附加死而不僵状态\n但是对部分攻击无效",
    id: 810,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "死而不僵",
    description:
      "除特定攻击之外其他所有对自身发动的攻击均无法令体力减少到1以下",
    id: 811,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "出死入生",
    description:
      "除特定攻击之外其他所有对自身发动的攻击均无法令体力减少到1以下",
    id: 3255,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "献奉",
    description: "减轻所受到的伤害",
    id: 2682,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "石之心",
    description: "减轻所受到的伤害",
    id: 1840,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "残暴弹",
    description: "抵消一定伤害",
    id: 1898,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "伪装",
    description: "招架发动率提高，减轻所受到的伤害",
    id: 1832,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "星云",
    description: "减轻所受到的伤害",
    id: 1834,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "光之心",
    description: "减轻所受到的魔法伤害",
    id: 1839,
    type: "multiplier",
    performance: { physics: 0, magic: 1, darkness: 0 },
    isFriendly: true,
  },
  {
    name: "超火流星",
    description: "除特定攻击之外其他所有攻击均无效化",
    id: 1836,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "刚玉之心",
    description: "减轻所受到的伤害",
    id: 2683,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "刚玉之清",
    description: "减轻所受到的伤害",
    id: 2684,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "神祝祷",
    description: "抵消一定伤害",
    id: 1218,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "节制",
    description: "减轻所受到的伤害",
    id: 1873,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "水流幕",
    description: "减轻所受到的伤害",
    id: 2708,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "鼓舞",
    description: "抵消一定伤害",
    id: 297,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "激励",
    description: "抵消一定伤害",
    id: 1918,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "炽天的幕帘",
    description: "抵消一定伤害",
    id: 1917,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "野战治疗阵",
    description: "减轻所受到的伤害",
    id: 299,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "异想的幻光",
    description: "发动治疗魔法的治疗量提高，且受到魔法攻击的伤害减少",
    id: 317,
    type: "multiplier",
    performance: { physics: 0, magic: 1, darkness: 0 },
    isFriendly: true,
  },
  {
    name: "炽天的幻光",
    description: "发动治疗魔法的治疗量提高，且受到魔法攻击的伤害减少",
    id: 1875,
    type: "multiplier",
    performance: { physics: 0, magic: 1, darkness: 0 },
    isFriendly: true,
  },
  {
    name: "生命回生法",
    description: "体力最大值提高，同时自身所受体力恢复效果提高",
    id: 2710,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "怒涛之计",
    description: "减轻所受到的伤害",
    id: 2711,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "命运之轮",
    description: "减轻所受到的伤害",
    id: 849,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "天星交错",
    description: "抵消一定伤害",
    id: 1889,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "擢升",
    description: "减轻所受到的伤害",
    id: 2717,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "中间学派",
    description: "抵消一定伤害",
    id: 1921,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "均衡诊断",
    description: "抵消一定伤害",
    id: 2607,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "齐衡诊断",
    description: "抵消一定伤害",
    id: 2608,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "均衡预后",
    description: "抵消一定伤害",
    id: 2609,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "坚角清汁",
    description: "减轻所受到的伤害",
    id: 2618,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "白牛清汁",
    description: "减轻所受到的伤害",
    id: 2619,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "整体论",
    description: "减轻所受到的伤害",
    id: 3003,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "整体盾",
    description: "抵消一定伤害",
    id: 3365,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "输血",
    description: "抵消一定伤害",
    id: 2612,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "泛输血",
    description: "抵消一定伤害",
    id: 2613,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "心眼",
    description: "下次受到攻击时所受到的伤害减轻",
    id: 1232,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "金刚极意",
    description: "减轻所受到的一部分伤害",
    id: 1179,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "行吟",
    description: "减轻所受到的伤害",
    id: 1934,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "策动",
    description: "减轻所受到的伤害",
    id: 1951,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "防守之桑巴",
    description: "减轻所受到的伤害",
    id: 1826,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "即兴表演结束",
    description: "抵消一定伤害",
    id: 2697,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "残影",
    description: "抵消一定伤害",
    id: 488,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "魔罩",
    description: "抵消一定伤害",
    id: 168,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "守护之光",
    description: "抵消一定伤害",
    id: 2702,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "守护纹",
    description: "抵消一定伤害",
    id: 2597,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "抗死",
    description: "减轻所受到的魔法伤害，同时自身所受体力恢复效果提高",
    id: 2707,
    type: "multiplier",
    performance: { physics: 0, magic: 1, darkness: 0 },
    isFriendly: true,
  },
  {
    name: "雪仇",
    description: "攻击所造成的伤害降低",
    id: 1193,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: false,
  },
  {
    name: "牵制",
    description: "物理攻击和魔法攻击所造成的伤害降低",
    id: 1195,
    type: "multiplier",
    performance: { physics: 1, magic: 0.5, darkness: 0 },
    isFriendly: false,
  },
  {
    name: "昏乱",
    description: "物理攻击和魔法攻击所造成的伤害降低",
    id: 1203,
    type: "multiplier",
    performance: { physics: 0.5, magic: 1, darkness: 0 },
    isFriendly: false,
  },
  {
    name: "武装解除",
    description: "攻击所造成的伤害降低",
    id: 860,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: false,
  },
  {
    name: "减速",
    description: "战技与魔法的咏唱及复唱时间延长",
    id: 9,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: false,
  },
  {
    name: "体力增加",
    description: "体力最大值提高",
    id: 2120,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "腐臭",
    description: "造成的伤害降低",
    id: 1715,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: false,
  },
  {
    name: "智力精神降低",
    description: "智力与精神有所降低",
    id: 2115,
    type: "multiplier",
    performance: { physics: 0, magic: 1, darkness: 0 },
    isFriendly: false,
  },
  {
    name: "龙之力",
    description: "受到的伤害降低",
    id: 2500,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "超硬化",
    description: "无法自由活动，但受到攻击的伤害减少",
    id: 1722,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "玄结界",
    description: "减轻所受到的伤害，受到一定伤害后将附加玄天武水壁状态",
    id: 2496,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "仙人盾",
    description: "受到的伤害降低",
    id: 2119,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "强力守护",
    description: "令自身所受到的伤害减少，同时会以攻击力降低为代价提高自身仇恨",
    id: 1719,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "哥布防御",
    description: "抵消一定伤害",
    id: 2114,
    type: "absorbed",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "铜墙铁盾",
    description: "减轻所受到的伤害",
    id: 194,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "坚守要塞",
    description: "减轻所受到的伤害",
    id: 195,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "终极堡垒",
    description: "减轻所受到的伤害",
    id: 196,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "原初大地",
    description: "减轻所受到的伤害",
    id: 863,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "暗黑之力",
    description: "减轻所受到的伤害",
    id: 864,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
  {
    name: "灵魂之青",
    description: "减轻所受到的伤害",
    id: 1931,
    type: "multiplier",
    performance: { physics: 1, magic: 1, darkness: 1 },
    isFriendly: true,
  },
];

const keigennMap: Map<string, Keigenn> = new Map();

export type Server = "Chinese" | "Global";

export let loadedDataLang: Server | undefined = undefined;

export function loadKeigenn(server: "Chinese" | "Global"): void {
  if (loadedDataLang !== server) {
    const sourceKeigenns =
      server === "Chinese" ? keigenns : Object.assign(keigenns, {});
    keigennMap.clear();
    for (const keigenn of sourceKeigenns) {
      const icon = statusData[keigenn.id][1];
      keigenn.fullIcon = completeIcon(icon);
      keigennMap.set(keigenn.id.toString(16).toUpperCase(), keigenn as Keigenn);
    }
    loadedDataLang = server;
  }
}

loadKeigenn("Chinese");

export function getKeigenn(decId: string): Keigenn | undefined {
  return keigennMap.get(decId);
}

export const multiplierEffect = (multiplier: number) => {
  if (multiplier === 1) return "useful";
  if (multiplier === 0) return "unuseful";
  return "half-useful";
};

const regFriendly =
  /(?:耐性|防御力)(?:大幅)?(?:降低|提升|低下|下降)|受伤(?:加重|减轻)|体力(?:增加|衰减|减少)|伤害屏障/;
const regEnemy = /(?:精神|力量|灵巧|智力){1,2}(?:大幅)?降低/;

const createMap = (regExp: RegExp, isFriendly: boolean) =>
  Object.entries(statusData).reduce((map, [key, [name, icon]]) => {
    if (regExp.test(name)) {
      map.set(key, { name, icon, isFriendly });
    }
    return map;
  }, new Map());

export const universalVulnerableFriendly = createMap(regFriendly, true);
export const universalVulnerableEnemy = createMap(regEnemy, false);
