interface ChessBoard {
  position(): Object;
  fen(): string;
}

interface ChessBoardFactory {
  (containerElOrId: string | any, cfg: string | any): ChessBoard;
}

declare var chessboard: ChessBoardFactory;

declare module "angular-chessboard" {
  export = chessboard;
}
