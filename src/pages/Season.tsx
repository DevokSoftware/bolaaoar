import * as React from "react";
import {
  Box, Button, Flex, Text, SimpleGrid, TableContainer,
  Table, Thead, Tr, Th, Tbody, Td,
} from "@chakra-ui/react";

import { ITeam } from "../model/Team";
import { SeasonPrediction } from "../data/predictions";
import { participantColours, participantShortNames } from "../data/participants";
import Predictions from "../components/Predictions";
import { PersonEnum } from "../model/PersonEnum";
import { ConferenceEnum } from "../model/ConferenceEnum";
import { IPersonScore } from "../model/PersonScore";

interface SeasonProps {
  picks: ITeam[];
  lastUpdate: string | null;
  predictions?: SeasonPrediction[];
  standingsMessage?: string;
}

export const Season: React.FC<SeasonProps> = ({
  picks, lastUpdate, predictions = [], standingsMessage,
}) => {
  const [rowToHover, setRowToHover] = React.useState<PersonEnum>(PersonEnum.UNKNOWN);
  const standingsHeadingId = React.useId();

  const scoreboard: IPersonScore[] = [PersonEnum.RBR, PersonEnum.LN, PersonEnum.JD]
    .map((person) => ({
      person,
      wins: picks
        .filter((team) => team.chosenBy === person)
        .reduce((total, team) => total + team.wins, 0),
    }))
    .sort((a, b) => b.wins - a.wins);

  return (
    <Box maxW="1280px" mx="auto" pt={{ base: 4, md: 8 }} pb={6}>
      <Box
        as="section"
        aria-labelledby={standingsHeadingId}
        maxW="600px"
        mx="auto"
        bg="whiteAlpha.50"
        border="1px solid"
        borderColor="whiteAlpha.100"
        borderRadius="2xl"
        overflow="hidden"
      >
        <Flex align="center" justify="space-between" px={{ base: 4, sm: 6 }} py={5}>
          <Text as="h2" id={standingsHeadingId} color="gray.100" fontSize="lg" fontWeight="semibold">
            Standings
          </Text>
          <Text color="gray.400" fontSize="xs">Total team wins</Text>
        </Flex>
        <TableContainer>
          <Table size="sm" aria-label="Standings">
            <Thead bg="blackAlpha.100">
              <Tr>
                <Th color="gray.500" w="56px" px={{ base: 4, sm: 6 }} py={3}>Rank</Th>
                <Th color="gray.500" px={3} py={3}>Person</Th>
                <Th color="gray.500" isNumeric px={{ base: 4, sm: 6 }} py={3}>Wins</Th>
              </Tr>
            </Thead>
            <Tbody>
              {scoreboard.map(({ person, wins }, index) => {
                const colour = participantColours[person];
                return (
                  <Tr
                    key={person}
                    onMouseEnter={() => setRowToHover(person)}
                    onClick={() => setRowToHover(person)}
                    bg={rowToHover === person ? `${colour}12` : "transparent"}
                    _hover={{ bg: `${colour}12` }}
                  >
                    <Td color="gray.500" px={{ base: 4, sm: 6 }} py={4} borderColor="whiteAlpha.100">
                      <Flex
                        align="center" justify="center" boxSize="26px" borderRadius="lg"
                        bg={index === 0 && wins > 0 ? "orange.400" : "whiteAlpha.50"}
                        color={index === 0 && wins > 0 ? "gray.900" : "gray.400"}
                        fontSize="xs" fontWeight="bold"
                      >
                        {index + 1}
                      </Flex>
                    </Td>
                    <Td px={3} py={4} borderColor="whiteAlpha.100">
                      <Button
                        variant="unstyled" h="auto" minW={0} whiteSpace="normal" textAlign="left"
                        color="gray.200" fontSize={{ base: "xs", sm: "sm" }} fontWeight="medium"
                        aria-label={`Highlight ${person}'s picks`}
                        onFocus={() => setRowToHover(person)}
                      >
                        <Flex align="center" gap={3}>
                          <Box boxSize="7px" borderRadius="full" bg={colour} flexShrink={0} />
                          {person}
                        </Flex>
                      </Button>
                    </Td>
                    <Td isNumeric px={{ base: 4, sm: 6 }} py={4} borderColor="whiteAlpha.100">
                      <Text color="gray.100" fontSize="xl" fontWeight="bold" sx={{ fontVariantNumeric: "tabular-nums" }}>
                        {wins}
                      </Text>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Flex align="center" justify="space-between" mt={{ base: 9, md: 12 }} mb={5}>
        <Text as="h2" color="gray.100" fontSize="xl" fontWeight="semibold">Team picks</Text>
        <Text color="gray.500" fontSize="xs">By draft order</Text>
      </Flex>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 5, md: 7 }}>
        {[ConferenceEnum.WEST, ConferenceEnum.EAST].map((conference) => {
          const conferenceName = conference === ConferenceEnum.WEST ? "Western Conference" : "Eastern Conference";
          const conferencePicks = picks
            .filter((team) => team.conference === conference)
            .sort((a, b) => a.pick - b.pick);

          return (
            <Box
              as="section" aria-label={conferenceName} key={conference} minW={0}
              bg="whiteAlpha.50" border="1px solid" borderColor="whiteAlpha.100"
              borderRadius="2xl" overflow="hidden"
            >
              <Flex align="center" justify="space-between" px={{ base: 4, sm: 5 }} py={5}>
                <Text as="h3" color="gray.100" fontSize={{ base: "sm", sm: "md" }} fontWeight="semibold">
                  {conferenceName}
                </Text>
                <Text color="gray.500" fontSize="xs">{conferencePicks.length} teams</Text>
              </Flex>
              <TableContainer>
                <Table size="sm" sx={{ tableLayout: "fixed" }} aria-label={`${conferenceName} picks`}>
                  <Thead bg="blackAlpha.100">
                    <Tr>
                      <Th color="gray.500" w={{ base: "38px", sm: "48px" }} px={2} py={3} fontSize="10px" textAlign="center">Pick</Th>
                      <Th color="gray.500" px={2} py={3} fontSize="10px">Team</Th>
                      <Th color="gray.500" w={{ base: "76px", sm: "148px" }} px={2} py={3} fontSize="10px">Picked by</Th>
                      <Th color="gray.500" w={{ base: "50px", sm: "64px" }} px={3} py={3} fontSize="10px" isNumeric>Wins</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {conferencePicks.map((team) => {
                      const colour = participantColours[team.chosenBy];
                      return (
                        <Tr
                          key={team.id}
                          bg={rowToHover === team.chosenBy ? `${colour}12` : "transparent"}
                          _hover={{ bg: "whiteAlpha.50" }}
                        >
                          <Td color="gray.500" px={2} py={3} borderColor="whiteAlpha.100" textAlign="center" fontSize="xs">
                            {team.pick}
                          </Td>
                          <Td px={2} py={3} borderColor="whiteAlpha.100" whiteSpace="normal">
                            <Flex align="center" gap={{ base: 2, sm: 3 }}>
                              <Box boxSize={{ base: "30px", sm: "34px" }} flexShrink={0}>
                                {React.createElement(team.icon, { size: "100%" })}
                              </Box>
                              <Text color="gray.200" fontSize={{ base: "xs", sm: "sm" }} fontWeight="medium" lineHeight="short" minW={0} overflowWrap="anywhere">
                                {team.name}
                              </Text>
                            </Flex>
                          </Td>
                          <Td color={colour} px={2} py={3} borderColor="whiteAlpha.100" fontSize="xs" whiteSpace="normal">
                            <Text as="span" display={{ base: "none", sm: "inline" }}>{team.chosenBy}</Text>
                            <Text as="span" display={{ base: "inline", sm: "none" }} aria-label={team.chosenBy}>
                              {participantShortNames[team.chosenBy]}
                            </Text>
                          </Td>
                          <Td isNumeric px={3} py={3} borderColor="whiteAlpha.100">
                            <Text as="b" color="gray.100" fontSize="sm" sx={{ fontVariantNumeric: "tabular-nums" }}>{team.wins}</Text>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          );
        })}
      </SimpleGrid>

      <Predictions predictions={predictions} highlightedPerson={rowToHover} />
      <Box mt={8}>
        {standingsMessage && (
          <Text role="status" color="gray.400" fontSize="xs" textAlign="center">{standingsMessage}</Text>
        )}
        {lastUpdate && (
          <Text color="gray.400" fontSize="xs" textAlign="center">Last Update: {lastUpdate}</Text>
        )}
      </Box>
    </Box>
  );
};
export default Season;
