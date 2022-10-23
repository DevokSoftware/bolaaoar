import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  SimpleGrid,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react"

import { Team } from "./model/Team";
import *  as NBAIcons from "./logos/index.js";
import { PersonEnum } from "./model/PersonEnum";
import { ConferenceEnum } from "./model/ConferenceEnum";
import { PersonScore } from "./model/PersonScore";

function App() {
  const teams = [
    new Team("1610612737", "Atlanta Hawks", PersonEnum.JD, ConferenceEnum.EAST, NBAIcons.ATL, 7),
    new Team("1610612738", "Boston Celtics", PersonEnum.RBR, ConferenceEnum.EAST, NBAIcons.BOS, 3),
    new Team("1610612751", "Brooklyn Nets", PersonEnum.JD, ConferenceEnum.EAST, NBAIcons.BKN, 6),
    new Team("1610612766", "Charlotte Hornets", PersonEnum.RBR, ConferenceEnum.WEST, NBAIcons.CHA, 15),
    new Team("1610612741", "Chicago Bulls", PersonEnum.RBR, ConferenceEnum.EAST, NBAIcons.CHI, 10),
    new Team("1610612739", "Cleveland Cavaliers", PersonEnum.LN, ConferenceEnum.EAST, NBAIcons.CLE, 2),
    new Team("1610612742", "Dallas Mavericks", PersonEnum.LN, ConferenceEnum.WEST, NBAIcons.DAL, 8),
    new Team("1610612743", "Denver Nuggets", PersonEnum.JD, ConferenceEnum.WEST, NBAIcons.DEN, 3),
    new Team("1610612765", "Detroit Pistons", PersonEnum.JD, ConferenceEnum.EAST, NBAIcons.DET, 12),
    new Team("1610612744", "Golden State Warriors", PersonEnum.LN, ConferenceEnum.WEST, NBAIcons.GSW, 2),
    new Team("1610612745", "Houston Rockets", PersonEnum.LN, ConferenceEnum.WEST, NBAIcons.HOU, 14),
    new Team("1610612754", "Indiana Pacers", PersonEnum.LN, ConferenceEnum.EAST, NBAIcons.IND, 14),
    new Team("1610612746", "Los Angeles Clippers", PersonEnum.JD, ConferenceEnum.WEST, NBAIcons.LAC, 4),
    new Team("1610612747", "Los Angeles Lakers", PersonEnum.JD, ConferenceEnum.WEST, NBAIcons.LAL, 9),
    new Team("1610612763", "Memphis Grizzlies", PersonEnum.RBR, ConferenceEnum.WEST, NBAIcons.MEM, 7),
    new Team("1610612748", "Miami Heat", PersonEnum.RBR, ConferenceEnum.EAST, NBAIcons.MIA, 4),
    new Team("1610612749", "Milwaukee Bucks", PersonEnum.JD, ConferenceEnum.EAST, NBAIcons.MIL, 1),
    new Team("1610612750", "Minnesota Timberwolves", PersonEnum.LN, ConferenceEnum.WEST, NBAIcons.MIN, 5),
    new Team("1610612740", "New Orleans Pelicans", PersonEnum.RBR, ConferenceEnum.WEST, NBAIcons.NOP, 6),
    new Team("1610612752", "New York Knicks", PersonEnum.RBR, ConferenceEnum.EAST, NBAIcons.NYK, 9),
    new Team("1610612760", "Oklahoma City Thunder", PersonEnum.JD, ConferenceEnum.EAST, NBAIcons.OKC, 15),
    new Team("1610612753", "Orlando Magic", PersonEnum.JD, ConferenceEnum.EAST, NBAIcons.ORL, 13),
    new Team("1610612755", "Philadelphia 76ers", PersonEnum.LN, ConferenceEnum.EAST, NBAIcons.PHI, 5),
    new Team("1610612756", "Phoenix Suns", PersonEnum.RBR, ConferenceEnum.WEST, NBAIcons.PHX, 1),
    new Team("1610612757", "Portland Trail Blazers", PersonEnum.LN, ConferenceEnum.WEST, NBAIcons.POR, 11),
    new Team("1610612758", "Sacramento Kings", PersonEnum.JD, ConferenceEnum.WEST, NBAIcons.SAC, 10),
    new Team("1610612759", "San Antonio Spurs", PersonEnum.RBR, ConferenceEnum.WEST, NBAIcons.SAS, 13),
    new Team("1610612761", "Toronto Raptors", PersonEnum.LN, ConferenceEnum.EAST, NBAIcons.TOR, 8),
    new Team("1610612764", "Washington Wizards", PersonEnum.LN, ConferenceEnum.EAST, NBAIcons.WAS, 11),
    new Team("1610612762", "Utah Jazz", PersonEnum.RBR, ConferenceEnum.WEST, NBAIcons.UTA, 12),
  ]

  const [isLoading, setLoading] = React.useState(true);
  const [personScoreboard, setPersonScoreboard] = React.useState<PersonScore[]>([]);
  const [teamsList, setTeamsList] = React.useState<Team[]>([]);

  function mapTeams(scoreboardArray: any) {
    for (let scoreboard of scoreboardArray) {
      for (let team of teams) {
        if (team.id == scoreboard.teamId) {
          team.wins = scoreboard.w
          break;
        }
      }
    }
    setTeamsList(teams)
    populateScoreBoard()
  }

  function populateScoreBoard() {
    let rbr: PersonScore = new PersonScore(PersonEnum.RBR, teams.filter(item => item.chosenBy === PersonEnum.RBR).map(item => item.wins).reduce((prev, next) => prev + next));
    let ln: PersonScore = new PersonScore(PersonEnum.LN, teams.filter(item => item.chosenBy === PersonEnum.LN).map(item => item.wins).reduce((prev, next) => prev + next));
    let jd: PersonScore = new PersonScore(PersonEnum.JD, teams.filter(item => item.chosenBy === PersonEnum.JD).map(item => item.wins).reduce((prev, next) => prev + next));
    setPersonScoreboard([rbr, ln, jd]);
    setLoading(false);
  }

  React.useEffect(() => {
    setTeamsList(teams)
    populateScoreBoard()
    fetch("/stats")
      .then((res) => {
        res.json().then(mapTeams)
      })
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <SimpleGrid minChildWidth='120px' spacing='60px' >
        <TableContainer maxWidth='400px' w='90%' m='auto' mt='3vh'>
          <Table size='lg'>
            <Thead>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th color='white' textAlign={'center'}>Vitórias</Th>
              </Tr>
            </Thead>
            <Tbody>
              {personScoreboard.sort((a, b) => b.wins - a.wins).map((listValue, index) => {
                return (
                  <Tr>
                    <Td color='gray.400' pt={0} pb={0}>{index + 1}</Td>
                    <Td color='gray.400' pt={0} pb={0}>{listValue.person}</Td>
                    <Td color='white' textAlign={'center'} pt={0} pb={0}>{listValue.wins}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </SimpleGrid>
      <SimpleGrid minChildWidth='120px' spacing='40px' mt='3vh'>
        <Text as='b' m='auto' fontSize='2xl'>PICKS</Text>
      </SimpleGrid>
      <SimpleGrid minChildWidth='220px' spacing='40px'>
        <Box textAlign="center">
          <Text as='b' fontSize='md'>Conferência Oeste</Text>
          <TableContainer w='70%' m='auto' mt='3vh'>
            <Table size='sm'>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {teamsList.filter(x => x.conference === ConferenceEnum.WEST).sort((a, b) => a.pick - b.pick).map((listValue) => {
                  return (
                    <Tr>
                      <Td color='gray.400' pt={0} pb={0}>{listValue.pick}</Td>
                      <Td color='gray.400' pt={0} pb={0}>{listValue.chosenBy}</Td>
                      <Td color='gray.400 ' pt={0} pb={0}>{React.createElement(listValue.icon, { size: 40 })}</Td>
                      <Td color='gray.400' pt={0} pb={0}>{listValue.wins}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box textAlign="center">

          <Text as='b' fontSize='md'>Conferência Este</Text>
          <TableContainer w='70%' m='auto' mt='3vh'>
            <Table size='sm'>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th ></Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {teamsList.filter(x => x.conference === ConferenceEnum.EAST).sort((a, b) => a.pick - b.pick).map((listValue) => {
                  return (
                    <Tr>
                      <Td color='gray.400' pt={0} pb={0}>{listValue.pick}</Td>
                      <Td color='gray.400' pt={0} pb={0}>{listValue.chosenBy}</Td>
                      <Td color='gray.400' pt={0} pb={0}>{React.createElement(listValue.icon, { size: 40 })}</Td>
                      <Td color='gray.400' pt={0} pb={0}>{listValue.wins}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </SimpleGrid>

    </ChakraProvider >
  );
}
export default App;