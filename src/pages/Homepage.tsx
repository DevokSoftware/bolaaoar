import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  SimpleGrid,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Spinner,
  AbsoluteCenter,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { ITeam, Team } from "../model/Team";
import theme from "../theme";
import Season from "./Season";
import {
  getPicksFromSeason2223,
  getPicksFromSeason2324,
  getPicksFromSeason2425,
} from "../data/picks";

export const Homepage: React.FC = () => {
  const [currentSeasonLastUpdate, setCurrentSeasonLastUpdate] =
    React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [currentSeasonPicks, setCurrentYearPicks] = React.useState<ITeam[]>(
    getPicksFromSeason2425()
  );
  const picks_22_23 = getPicksFromSeason2223();
  const picks_23_24 = getPicksFromSeason2324();

  function mapTeams(scoreboardResponse: any) {
    setCurrentYearPicks((prevPicks) => {
      const updatedPicks = prevPicks.map((team) => {
        const foundTeam = scoreboardResponse.response.find(
          (s: any) => s.team.id == team.id
        );
        if (foundTeam) {
          return { ...team, wins: foundTeam.win.total };
        }
        return team;
      });

      setCurrentSeasonLastUpdate(scoreboardResponse.lastUpdate);
      setLoading(false);

      console.log(scoreboardResponse);
      return updatedPicks;
    });
  }

  // React.useEffect(() => {
  //   // fetch("http://localhost:3001/standings")
  //   fetch("https://elated-tuxedo-mite.cyclic.app/standings")
  //     .then((response) => response.json())
  //     .then((data) => mapTeams(data));
  // }, []);

  return (
    <ChakraProvider theme={theme}>
      {!loading ? (
        <Tabs>
          <TabList>
            <Tab>Season 24/25</Tab>
            <Tab>Season 23/24</Tab>
            <Tab>Season 22/23</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {/* Season 24/25*/}
              <Season
                picks={currentSeasonPicks}
                lastUpdate={currentSeasonLastUpdate}
              />
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
        <Box position="relative" h="100vh">
          <AbsoluteCenter>
            <Spinner size="xl" />
          </AbsoluteCenter>
        </Box>
      )}
    </ChakraProvider>
  );
};
export default Homepage;
