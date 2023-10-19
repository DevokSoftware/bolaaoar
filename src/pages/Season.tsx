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
} from "@chakra-ui/react";

import { ITeam, Team } from "../model/Team";
import { PersonEnum } from "../model/PersonEnum";
import { ConferenceEnum } from "../model/ConferenceEnum";
import { IPersonScore } from "../model/PersonScore";

interface SeasonProps {
  picks: ITeam[];
  lastUpdate: string | null;
}

export const Season: React.FC<SeasonProps> = ({ picks, lastUpdate }) => {
  const [rowToHover, setRowToHover] = React.useState<PersonEnum>(
    PersonEnum.UNKNOWN
  );

  const scoreboard: IPersonScore[] = [
    {
      person: PersonEnum.RBR,
      wins: picks
        .filter((item) => item.chosenBy === PersonEnum.RBR)
        .map((item) => item.wins)
        .reduce((prev, next) => prev + next),
    },
    {
      person: PersonEnum.LN,
      wins: picks
        .filter((item) => item.chosenBy === PersonEnum.LN)
        .map((item) => item.wins)
        .reduce((prev, next) => prev + next),
    },
    {
      person: PersonEnum.JD,
      wins: picks
        .filter((item) => item.chosenBy === PersonEnum.JD)
        .map((item) => item.wins)
        .reduce((prev, next) => prev + next),
    },
  ];

  return (
    <>
      <SimpleGrid>
        <TableContainer w={{ base: "95%", sm: "30%" }} m="auto">
          <Table size="sm">
            <Thead>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th color="gray.400" textAlign={"center"}>
                  <Text as="b">wins</Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {scoreboard
                .sort((a, b) => b.wins - a.wins)
                .map((listValue, index) => {
                  return (
                    <Tr
                      key={listValue.person}
                      onMouseEnter={() => setRowToHover(listValue.person)}
                      onClick={() => setRowToHover(listValue.person)}
                      backgroundColor={
                        rowToHover === listValue.person ? "blue.800" : ""
                      }
                      h="37px"
                    >
                      <Td color="gray.400" pt={0} pb={0}>
                        {index + 1}
                      </Td>
                      <Td color="gray.400" pt={0} pb={0}>
                        {listValue.person}
                      </Td>
                      <Td color="gray.400" textAlign={"center"} pt={0} pb={0}>
                        <Text as="b"> {listValue.wins}</Text>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </SimpleGrid>
      <SimpleGrid minChildWidth="120px" spacing="40px" mt="3vh">
        <Text as="b" m="auto" fontSize="2xl" color="gray.300">
          PICKS
        </Text>
      </SimpleGrid>
      <SimpleGrid minChildWidth="220px" spacing="40px">
        <Box textAlign="center">
          <Text as="b" fontSize="md" color="gray.300">
            Western Conference
          </Text>
          <TableContainer
            w={{ base: "95%", sm: "70%" }}
            m="auto"
            mt={{ base: "1vh", sm: "3vh" }}
          >
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {picks

                  .filter((x) => x.conference === ConferenceEnum.WEST)
                  .sort((a, b) => a.pick - b.pick)
                  .map((listValue) => {
                    return (
                      <Tr
                        key={listValue.id}
                        backgroundColor={
                          rowToHover === listValue.chosenBy ? "blue.800" : ""
                        }
                      >
                        <Td color="gray.400" pt={0} pb={0}>
                          {listValue.pick}
                        </Td>
                        <Td color="gray.400" pt={0} pb={0}>
                          {listValue.chosenBy}
                        </Td>
                        <Td color="gray.400" pt={0} pb={0}>
                          {React.createElement(listValue.icon, {
                            size: 40,
                          })}
                        </Td>
                        <Td color="gray.400" pt={0} pb={0}>
                          <Text as="b"> {listValue.wins}</Text>
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box textAlign="center">
          <Text as="b" fontSize="md" color="gray.300">
            Eastern Conference
          </Text>
          <TableContainer
            w={{ base: "95%", sm: "70%" }}
            m="auto"
            mt={{ base: "1vh", sm: "3vh" }}
          >
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {picks
                  .filter((x) => x.conference === ConferenceEnum.EAST)
                  .sort((a, b) => a.pick - b.pick)
                  .map((listValue) => {
                    return (
                      <Tr
                        key={listValue.id}
                        backgroundColor={
                          rowToHover === listValue.chosenBy ? "blue.800" : ""
                        }
                      >
                        <Td color="gray.400" pt={0} pb={0}>
                          {listValue.pick}
                        </Td>
                        <Td color="gray.400" pt={0} pb={0}>
                          {listValue.chosenBy}
                        </Td>
                        <Td color="gray.400" pt={0} pb={0}>
                          {React.createElement(listValue.icon, {
                            size: 40,
                          })}
                        </Td>
                        <Td color="gray.400" pt={0} pb={0}>
                          <Text as="b"> {listValue.wins}</Text>
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </SimpleGrid>
      <SimpleGrid minChildWidth="120px" spacing="60px" mt="4vh">
        {lastUpdate && (
          <Text color="gray.400" fontSize="xs" textAlign="center">
            Last Update: {lastUpdate}
          </Text>
        )}
      </SimpleGrid>
    </>
  );
};
export default Season;
