import * as React from "react"
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
} from "@chakra-ui/react"

import { Team } from "./model/Team";
import *  as NBAIcons from "./logos/index.js";
import { PersonEnum } from "./model/PersonEnum";
import { ConferenceEnum } from "./model/ConferenceEnum";
import { PersonScore } from "./model/PersonScore";
import theme from "./theme";

function App() {
  const teams = [
    new Team("1", "Atlanta Hawks", PersonEnum.JD, ConferenceEnum.EAST, NBAIcons.ATL, 7),
    new Team("2", "Boston Celtics", PersonEnum.RBR, ConferenceEnum.EAST, NBAIcons.BOS, 3),
    new Team("4", "Brooklyn Nets", PersonEnum.JD, ConferenceEnum.EAST, NBAIcons.BKN, 6),
    new Team("5", "Charlotte Hornets", PersonEnum.RBR, ConferenceEnum.EAST, NBAIcons.CHA, 15),
    new Team("6", "Chicago Bulls", PersonEnum.RBR, ConferenceEnum.EAST, NBAIcons.CHI, 10),
    new Team("7", "Cleveland Cavaliers", PersonEnum.LN, ConferenceEnum.EAST, NBAIcons.CLE, 2),
    new Team("8", "Dallas Mavericks", PersonEnum.LN, ConferenceEnum.WEST, NBAIcons.DAL, 8),
    new Team("9", "Denver Nuggets", PersonEnum.JD, ConferenceEnum.WEST, NBAIcons.DEN, 3),
    new Team("10", "Detroit Pistons", PersonEnum.JD, ConferenceEnum.EAST, NBAIcons.DET, 12),
    new Team("11", "Golden State Warriors", PersonEnum.LN, ConferenceEnum.WEST, NBAIcons.GSW, 2),
    new Team("14", "Houston Rockets", PersonEnum.LN, ConferenceEnum.WEST, NBAIcons.HOU, 14),
    new Team("15", "Indiana Pacers", PersonEnum.LN, ConferenceEnum.EAST, NBAIcons.IND, 14),
    new Team("16", "Los Angeles Clippers", PersonEnum.JD, ConferenceEnum.WEST, NBAIcons.LAC, 4),
    new Team("17", "Los Angeles Lakers", PersonEnum.JD, ConferenceEnum.WEST, NBAIcons.LAL, 9),
    new Team("19", "Memphis Grizzlies", PersonEnum.RBR, ConferenceEnum.WEST, NBAIcons.MEM, 7),
    new Team("20", "Miami Heat", PersonEnum.RBR, ConferenceEnum.EAST, NBAIcons.MIA, 4),
    new Team("21", "Milwaukee Bucks", PersonEnum.JD, ConferenceEnum.EAST, NBAIcons.MIL, 1),
    new Team("22", "Minnesota Timberwolves", PersonEnum.LN, ConferenceEnum.WEST, NBAIcons.MIN, 5),
    new Team("23", "New Orleans Pelicans", PersonEnum.RBR, ConferenceEnum.WEST, NBAIcons.NOP, 6),
    new Team("24", "New York Knicks", PersonEnum.RBR, ConferenceEnum.EAST, NBAIcons.NYK, 9),
    new Team("25", "Oklahoma City Thunder", PersonEnum.JD, ConferenceEnum.WEST, NBAIcons.OKC, 15),
    new Team("26", "Orlando Magic", PersonEnum.JD, ConferenceEnum.EAST, NBAIcons.ORL, 13),
    new Team("27", "Philadelphia 76ers", PersonEnum.LN, ConferenceEnum.EAST, NBAIcons.PHI, 5),
    new Team("28", "Phoenix Suns", PersonEnum.RBR, ConferenceEnum.WEST, NBAIcons.PHX, 1),
    new Team("29", "Portland Trail Blazers", PersonEnum.LN, ConferenceEnum.WEST, NBAIcons.POR, 11),
    new Team("30", "Sacramento Kings", PersonEnum.JD, ConferenceEnum.WEST, NBAIcons.SAC, 10),
    new Team("31", "San Antonio Spurs", PersonEnum.RBR, ConferenceEnum.WEST, NBAIcons.SAS, 13),
    new Team("38", "Toronto Raptors", PersonEnum.LN, ConferenceEnum.EAST, NBAIcons.TOR, 8),
    new Team("41", "Washington Wizards", PersonEnum.LN, ConferenceEnum.EAST, NBAIcons.WAS, 11),
    new Team("40", "Utah Jazz", PersonEnum.RBR, ConferenceEnum.WEST, NBAIcons.UTA, 12),
  ]

  const [personScoreboard, setPersonScoreboard] = React.useState<PersonScore[]>([]);
  const [teamsList, setTeamsList] = React.useState<Team[]>([]);
  const [lastUpdate, setLastUpdate] = React.useState<string>("");

  function mapTeams(scoreboardResponse: any) {
    for (let scoreboard of scoreboardResponse.response) {
      for (let team of teams) {
        if (team.id == scoreboard.team.id) {
          team.wins = scoreboard.win.total
          break;
        }
      }
    }
    setTeamsList(teams)
    setLastUpdate(scoreboardResponse.lastUpdate)
    populateScoreBoard()
  }

  function populateScoreBoard() {
    let rbr: PersonScore = new PersonScore(PersonEnum.RBR, teams.filter(item => item.chosenBy === PersonEnum.RBR).map(item => item.wins).reduce((prev, next) => prev + next));
    let ln: PersonScore = new PersonScore(PersonEnum.LN, teams.filter(item => item.chosenBy === PersonEnum.LN).map(item => item.wins).reduce((prev, next) => prev + next));
    let jd: PersonScore = new PersonScore(PersonEnum.JD, teams.filter(item => item.chosenBy === PersonEnum.JD).map(item => item.wins).reduce((prev, next) => prev + next));
    setPersonScoreboard([rbr, ln, jd]);
  }

  React.useEffect(() => {
    setTeamsList(teams)
    populateScoreBoard()
    fetch("https://fine-plum-slug-cuff.cyclic.app/standings")
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
      <SimpleGrid minChildWidth='120px' spacing='60px' m='4vh' >
        <Text color='gray.400' fontSize='xs'>Última Atualização: {lastUpdate}</Text>
      </SimpleGrid>
    </ChakraProvider >
  );
}
export default App;