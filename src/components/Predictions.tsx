import * as React from "react";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { PredictionPick, SeasonPrediction } from "../data/predictions";
import { PersonEnum } from "../model/PersonEnum";

const participantColours: Record<PersonEnum, string> = {
  [PersonEnum.UNKNOWN]: "#A0AEC0",
  [PersonEnum.JD]: "#63B3ED",
  [PersonEnum.RBR]: "#F6AD55",
  [PersonEnum.LN]: "#B794F4",
};

function Portrait({ pick, colour }: { pick: PredictionPick; colour: string }) {
  const [imageFailed, setImageFailed] = React.useState(false);

  return (
    <Flex
      align="center"
      justify="center"
      mx="auto"
      my={4}
      boxSize={{ base: "72px", sm: "112px", xl: "128px" }}
      borderRadius="full"
      border="2px solid"
      borderColor={colour}
      boxShadow={`0 0 0 5px ${colour}12`}
      bgGradient={`linear(to-b, ${colour}24, ${colour}08)`}
      overflow="hidden"
    >
      {pick.portrait && !imageFailed ? (
        <Image
          src={`${process.env.PUBLIC_URL}/images/predictions/${pick.portrait}`}
          alt={pick.prediction}
          boxSize="100%"
          objectFit="cover"
          loading="lazy"
          ignoreFallback
          onError={() => setImageFailed(true)}
        />
      ) : (
        <Text role="img" aria-label={pick.prediction} color={colour} fontSize="2xl" fontWeight="bold">
          {pick.prediction.split(" ").map((part) => part[0]).slice(0, 2).join("")}
        </Text>
      )}
    </Flex>
  );
}

export default function Predictions({
  predictions,
  highlightedPerson = PersonEnum.UNKNOWN,
}: {
  predictions: SeasonPrediction[];
  highlightedPerson?: PersonEnum;
}) {
  if (predictions.length === 0) return null;

  return (
    <Box as="section" aria-labelledby="predictions-heading" maxW="1280px" mx="auto" mt={{ base: 12, md: 20 }} mb={8}>
      <Box textAlign="center" mb={{ base: 6, md: 10 }}>
        <Box w="36px" h="3px" bg="orange.400" borderRadius="full" mx="auto" mb={4} />
        <Text as="h2" id="predictions-heading" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" letterSpacing="0.12em" color="gray.100">
          PREDICTIONS
        </Text>
        <Text color="gray.400" fontSize="sm" mt={2}>Three perspectives. One season.</Text>
      </Box>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 5, md: 7 }}>
        {predictions.map((category, index) => {
          const isFinals = category.picks.some((pick) => pick.finalists?.length);

          return (
            <Box
              as="section"
              aria-label={category.title}
              key={category.title}
              gridColumn={isFinals ? "1 / -1" : undefined}
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor={isFinals ? "orange.400" : "whiteAlpha.100"}
              borderRadius="2xl"
              p={{ base: 4, sm: 7 }}
              overflow="hidden"
            >
              <Flex align="center" justify="space-between" gap={3} mb={{ base: 5, sm: 7 }}>
                <Text as="h3" color="gray.100" fontSize={{ base: "md", sm: "lg" }} fontWeight="semibold">
                  {category.title}
                </Text>
                <Text color={isFinals ? "orange.300" : "gray.500"} fontSize="xs" letterSpacing="0.12em" flexShrink={0}>
                  {isFinals ? "THE FINALS" : String(index + 1).padStart(2, "0")}
                </Text>
              </Flex>

              <SimpleGrid as="ul" columns={3} spacing={{ base: 2, sm: 4 }} m={0} p={0} maxW={isFinals ? "900px" : undefined} mx="auto" listStyleType="none">
                {category.picks.map((pick) => {
                  const colour = participantColours[pick.person];
                  const selected = highlightedPerson !== PersonEnum.UNKNOWN && highlightedPerson === pick.person;

                  return (
                    <Box
                      as="li"
                      key={pick.person}
                      aria-label={`${pick.person}'s pick: ${pick.prediction}`}
                      minW={0}
                      textAlign="center"
                      borderRadius="xl"
                      py={3}
                      px={{ base: 0, sm: 2 }}
                      bg={selected ? `${colour}14` : "transparent"}
                    >
                      <Flex align="center" justify="center" minH="36px">
                        <Text color={colour} fontSize={{ base: "10px", sm: "xs", xl: "sm" }} fontWeight="medium" lineHeight="short">
                          {pick.person}
                        </Text>
                      </Flex>

                      {pick.finalists ? (
                        <Flex align="center" justify="center" gap={{ base: 0, sm: 2 }} minH={{ base: "104px", sm: "144px" }} aria-hidden="true">
                          {pick.finalists.map((team, teamIndex) => (
                            <React.Fragment key={team.name}>
                              {teamIndex > 0 && <Text color="gray.500" fontSize="xs">vs</Text>}
                              <Box boxSize={{ base: "32px", sm: "58px", xl: "72px" }}>
                                {React.createElement(team.icon, { size: "100%" })}
                              </Box>
                            </React.Fragment>
                          ))}
                        </Flex>
                      ) : <Portrait pick={pick} colour={colour} />}

                      <Text color="gray.100" fontWeight="semibold" fontSize={{ base: "xs", sm: "sm", xl: "md" }} lineHeight="short" overflowWrap="anywhere">
                        {pick.prediction}
                      </Text>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
