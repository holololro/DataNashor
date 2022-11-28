const GG_API_ROOT = 'http://3.36.71.186:8000/api/v1/riot/match/preview/';

const OPGG_API_ROOT = 'https://opgg-static.akamaized.net/images/lol';

export const urlGameData = (fileName: string) => {
  return process.env.REACT_APP_GG_API_ROOT + `${fileName.replace('.rofl', '')}`;
};

export const urlChampion = (champion: string) => {
  return process.env.REACT_APP_OPGG_API_ROOT + `/champion/${champion}.png`;
};
