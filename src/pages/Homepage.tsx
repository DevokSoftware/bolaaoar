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
  getPicksFromSeason2526,
} from "../data/picks";
import standings from "../data/standings.json";

export const Homepage: React.FC = () => {
  const [currentSeasonLastUpdate, setCurrentSeasonLastUpdate] =
    React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [currentSeasonPicks, setCurrentYearPicks] = React.useState<ITeam[]>(
    getPicksFromSeason2526()
  );
  const picks_22_23 = getPicksFromSeason2223();
  const picks_23_24 = getPicksFromSeason2324();
  const picks_24_25 = getPicksFromSeason2425();

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

  React.useEffect(() => {
    setLoading(true);
    // fetch("http://localhost:3001/standings")
    // GET INFO FROM BACKEND
    fetch("https://bolaaoar.onrender.com/standings")
      .then((response) => response.json())
      .then((data) => mapTeams(data))
      .catch((error) => {
        console.error("Error fetching standings:", error);
        setLoading(false);
      });
    //mapTeams(standings); -when using the local file and not the backend info
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {!loading ? (
        <Tabs>
          <TabList>
           <Tab>Season 25/26</Tab>
            <Tab>Season 24/25</Tab>
            <Tab>Season 23/24</Tab>
            <Tab>Season 22/23</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {/* Season 25/26*/}
              <Season
                picks={currentSeasonPicks}
                lastUpdate={currentSeasonLastUpdate}
              />
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
