import * as React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Homepage from "./Homepage";
import standings from "../data/standings.json";

const originalFetch = global.fetch;

afterEach(() => {
  global.fetch = originalFetch;
});

function respondWithStandings(season: number) {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      ...standings,
      parameters: { ...standings.parameters, season: String(season) },
      lastUpdate: "test standings update",
      response: standings.response.map((entry) => ({
        ...entry,
        season,
        win: { ...entry.win, total: entry.team.id === 2 ? 7 : 0 },
      })),
    }),
  });
}

test("new season receives live wins while last season retains its final results", async () => {
  respondWithStandings(2026);
  render(<Homepage />);
  await screen.findByRole("tab", { name: "Season 26/27" });
  const currentPanel = screen.getByRole("tabpanel");
  const currentBoston = within(currentPanel).getByTitle("Boston Celtics").closest("tr")!;
  expect(within(currentBoston).getByText("7")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("tab", { name: "Season 25/26" }));
  const archivedBoston = within(screen.getByRole("tabpanel"))
    .getByTitle("Boston Celtics").closest("tr")!;
  expect(within(archivedBoston).getByText("56")).toBeInTheDocument();
});

test("previous-season standings cannot overwrite the new season", async () => {
  respondWithStandings(2025);
  render(<Homepage />);
  await screen.findByRole("tab", { name: "Season 26/27" });
  const panel = screen.getByRole("tabpanel");
  const boston = within(panel).getByTitle("Boston Celtics").closest("tr")!;
  expect(within(boston).getByText("0")).toBeInTheDocument();
  expect(within(panel).queryByText(/test standings update/)).not.toBeInTheDocument();
  expect(within(panel).getByText(/waiting for 26\/27 standings/i)).toBeInTheDocument();
});

test("shows award predictions and each person's corrected Finals pick", async () => {
  respondWithStandings(2026);
  render(<Homepage />);
  await screen.findByRole("tab", { name: "Season 26/27" });
  const panel = screen.getByRole("tabpanel");
  expect(within(panel).getByText("Caleb Wilson")).toBeInTheDocument();
  expect(within(panel).getByText("Luka Dončić")).toBeInTheDocument();
  const raptors = within(panel).getByText("Thunder vs Raptors").closest("tr")!;
  expect(within(raptors).getByText("Lucas Niven")).toBeInTheDocument();
  const sixers = within(panel).getByText("Thunder vs 76ers").closest("tr")!;
  expect(within(sixers).getByText("João Dinis")).toBeInTheDocument();
});
