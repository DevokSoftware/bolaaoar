import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Spinner,
  AbsoluteCenter,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { ITeam } from "../model/Team";
import theme from "../theme";
import Season from "./Season";
import {
  getPicksFromSeason2223,
  getPicksFromSeason2324,
  getPicksFromSeason2425,
  getPicksFromSeason2526,
  getPicksFromSeason2627,
} from "../data/picks";
import { predictions2627 } from "../data/predictions";

const currentSeasonYear = 2026;

interface StandingsResponse {
  response: {
    season: number | string;
    team: { id: number };
    win: { total: number };
  }[];
  lastUpdate: string;
}

export const Homepage: React.FC = () => {
  const [currentSeasonLastUpdate, setCurrentSeasonLastUpdate] =
    React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [standingsMessage, setStandingsMessage] = React.useState(
    "Waiting for 26/27 standings."
  );
  const [currentSeasonPicks, setCurrentYearPicks] = React.useState<ITeam[]>(
    getPicksFromSeason2627()
  );
  const picks_22_23 = getPicksFromSeason2223();
  const picks_23_24 = getPicksFromSeason2324();
  const picks_24_25 = getPicksFromSeason2425();
  const picks_25_26 = getPicksFromSeason2526();

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://bolaaoar.onrender.com/standings?season=${currentSeasonYear}`)
      .then((response) => {
        if (!response.ok) throw new Error("Unable to fetch standings");
        return response.json();
      })
      .then((data: StandingsResponse) => {
        const seasonStandings = data.response.filter(
          (entry) => Number(entry.season) === currentSeasonYear
        );
        if (seasonStandings.length === 0) return;
        setCurrentYearPicks((previousPicks) => previousPicks.map((team) => {
          const standing = seasonStandings.find((entry) => Number(entry.team.id) === team.id);
          return standing ? { ...team, wins: standing.win.total } : team;
        }));
        setCurrentSeasonLastUpdate(data.lastUpdate);
        setStandingsMessage("");
      })
      .catch((error) => {
        console.error("Error fetching standings:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {!loading ? (
        <Tabs>
          <TabList overflowX="auto">
            <Tab flexShrink={0}>Season 26/27</Tab>
            <Tab flexShrink={0}>Season 25/26</Tab>
            <Tab>Season 24/25</Tab>
            <Tab>Season 23/24</Tab>
            <Tab>Season 22/23</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {/* Season 26/27*/}
              <Season
                picks={currentSeasonPicks}
                lastUpdate={currentSeasonLastUpdate}
                predictions={predictions2627}
                standingsMessage={standingsMessage}
              />
            </TabPanel>
            <TabPanel>
              {/* Season 25/26*/}
              <Season picks={picks_25_26} lastUpdate={null} />
            </TabPanel>
            <TabPanel>
              {/* Season 24/25*/}
              <Season picks={picks_24_25} lastUpdate={null} />
            </TabPanel>
            <TabPanel>
              {/* Season 23/24*/}
              <Season picks={picks_23_24} lastUpdate={null} />
            </TabPanel>
            <TabPanel>
              {/* Season 22/23*/}
              <Season picks={picks_22_23} lastUpdate={null} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      ) : (
        <Box 
          position="relative" 
          h="100vh" 
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bg="gray.900"
        >
          <AbsoluteCenter>
            <Box textAlign="center">
              <Spinner
                thickness="5px"
                speed="0.75s"
                emptyColor="orange.900"
                color="orange.400"
                size="xl"
                width="100px"
                height="100px"
              />
              <Text 
                mt={8} 
                fontSize="xl" 
                fontWeight="bold" 
                color="orange.400"
                letterSpacing="wide"
              >
                Loading NBA Standings...
              </Text>
            </Box>
          </AbsoluteCenter>
        </Box>
      )}
    </ChakraProvider>
  );
};
export default Homepage;
