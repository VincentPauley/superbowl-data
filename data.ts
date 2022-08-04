interface SuperBowls {
  wins: number[];
  losses: number[];
}

interface Team {
  name: string;
  superBowls: SuperBowls;
}

const Data: Team[] = [
  {
    name: '49ers',
    superBowls: { wins: [1994, 1989, 1988, 1984, 1981], losses: [2019, 2012] }
  },
  { name: 'Bears', superBowls: { wins: [1985], losses: [2006] } },
  { name: 'Bengals', superBowls: { wins: [], losses: [2021, 1988, 1981] } },
  { name: 'Bills', superBowls: { wins: [], losses: [1993, 1992, 1991, 1990] } },
  { name: 'Browns', superBowls: { wins: [], losses: [] } },
  {
    name: 'Broncos',
    superBowls: {
      wins: [2015, 1998, 1997],
      losses: [2013, 1989, 1987, 1986, 1977]
    }
  },
  { name: 'Bucaneers', superBowls: { wins: [2020, 2002], losses: [] } },
  { name: 'Cardinals', superBowls: { wins: [], losses: [2008] } },
  { name: 'Chiefs', superBowls: { wins: [2019, 1969], losses: [2020, 1966] } },
  { name: 'Chargers', superBowls: { wins: [], losses: [1994] } },
  {
    name: 'Cowboys',
    superBowls: {
      wins: [1995, 1993, 1992, 1977, 1971],
      losses: [1978, 1975, 1970]
    }
  },
  { name: 'Colts', superBowls: { wins: [2006, 1970], losses: [2009, 1968] } },
  {
    name: 'Dolphins',
    superBowls: { wins: [1973, 1972], losses: [1984, 1982, 1971] }
  },
  { name: 'Jets', superBowls: { wins: [1968], losses: [] } },
  { name: 'Jaguars', superBowls: { wins: [], losses: [] } },
  { name: 'Eagles', superBowls: { wins: [2017], losses: [2004, 1980] } },
  {
    name: 'Commanders',
    superBowls: { wins: [1991, 1987, 1982], losses: [1983, 1972] }
  },
  {
    name: 'Giants',
    superBowls: { wins: [2011, 2007, 1990, 1986], losses: [2000] }
  },
  {
    name: 'Packers',
    superBowls: { wins: [2010, 1996, 1967, 1966], losses: [1997] }
  },
  {
    name: 'Vikings',
    superBowls: { wins: [], losses: [1976, 1974, 1973, 1969] }
  },
  { name: 'Lions', superBowls: { wins: [], losses: [] } },
  { name: 'Falcons', superBowls: { wins: [], losses: [2016, 1998] } },
  { name: 'Panthers', superBowls: { wins: [], losses: [2015, 2003] } },
  {
    name: 'Patriots',
    superBowls: {
      wins: [2018, 2016, 2014, 2004, 2003, 2001],
      losses: [2017, 2011, 2007, 1996, 1985]
    }
  },
  {
    name: 'Rams',
    superBowls: { wins: [2021, 1999], losses: [2018, 2001, 1979] }
  },
  {
    name: 'Raiders',
    superBowls: { wins: [1983, 1980, 1976], losses: [2002, 1967] }
  },
  { name: 'Ravens', superBowls: { wins: [2012, 2000], losses: [] } },
  { name: 'Seahawks', superBowls: { wins: [2013], losses: [2014, 2005] } },
  {
    name: 'Steelers',
    superBowls: {
      wins: [2008, 2005, 1979, 1978, 1975, 1974],
      losses: [2010, 1995]
    }
  },
  { name: 'Saints', superBowls: { wins: [2009], losses: [] } },
  { name: 'Titans', superBowls: { wins: [], losses: [1999] } },
  { name: 'Texans', superBowls: { wins: [], losses: [] } }
];

export default Data;
