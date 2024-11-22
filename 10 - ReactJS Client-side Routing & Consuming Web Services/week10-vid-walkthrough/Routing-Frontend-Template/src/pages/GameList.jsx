const games = [{ gameTitle: 'Roblox' }, { gameTitle: 'Snake'}]

export default function GameList() {

  return (
    <>
      <ol>
        { games.map((game, i) => <li key={i}>{game.gameTitle}</li>) }
      </ol>
    </>
  )
}