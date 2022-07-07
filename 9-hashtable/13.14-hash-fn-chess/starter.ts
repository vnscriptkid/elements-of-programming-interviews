// 13.14 IMPLEMENT A HASH FUNCTION FOR CHESS
// The state of a game of chessis determined by what piece is present on each square, as
// illustrated in Figure 13.2 on the following page. Each square may be empty, or have
// one of six classes of pieces; each piece may be black or white. Thus|Tg(l + 6x2)1 =4
// bits suffice per square, which meansthat a total of 64 X 4 = 256 bits can represent the
// state of the chessboard. (The actual state of the game isslightly more complex, asit
// needs to capture which side is to move, castling rights, en passant, etc., but we will
// use the simpler model for this question.)

// Chess playing computers need to store sets of states, e.g., to determine if a partic¬
// ular state has been evaluated before, or is known to be a winning state. To reduce
// storage, it is natural to apply a hash function to the 256 bits of state, and ignore col¬
// lisions. The hash code can be computed by a conventional hash function for strings.
// However, since the computer repeatedly explores nearby states, it is advantageous
// to consider hash functions that can be efficiently computed based on incremental
// changes to the board.
// Design a hash function for chess game states. Your function should take a state and
// the hash code for that state, and a move, and efficiently compute the hash code for
// the updated state.

function prependMissingBits(bits: string, total: number) {
    let numOfMissingBits = total = bits.length;
    return '0'.repeat(numOfMissingBits) + bits;
}

enum PIECE {
    Pawn = 0,
    Bishop = 1,
    Knight = 2,
    Rook = 3,
    Queen = 4,
    King = 5,
}

enum COLOR {
    BLACK = 0,
    WHITE = 1
}

class Coords {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static build([x, y]: [number, number]) {
        return new Coords(x, y);
    }

    get bin(): string {
        let xBin = prependMissingBits(this.x.toString(2), 3);
        let yBin = prependMissingBits(this.y.toString(2), 3);

        return xBin + yBin;
    }


}

class CellState {
    place: Place | null;
    coords: Coords;

    constructor(place: Place | null, coords: Coords) {
        this.place = place;
        this.coords = coords;
    }

    hashCode(): number {
        // 1 bit (placed) + 3 bits (piece) + 1 bit (color) + 6 bits (coords)
        let binRep = '0b';


        let placedBits = '0';
        let pieceBits = '000';
        let colorBits = '0';
        let coordsBits = '000000'

        if (this.place) {
            placedBits = '1';
            pieceBits = this.place.piece.toString(2);
            colorBits = this.place.color.toString(2);
        }

        coordsBits = this.coords.bin;

        binRep += placedBits + pieceBits + colorBits + colorBits;

        return Number(binRep);
    }
}

class Place {
    piece: PIECE;
    color: COLOR;

    constructor(piece: PIECE, color: COLOR) {
        this.piece = piece;
        this.color = color;
    }

    static get WRook__() {
        return new Place(PIECE.Rook, COLOR.WHITE);
    }

    static get BRook__() {
        return new Place(PIECE.Rook, COLOR.BLACK);
    }

    static get WKnight() {
        return new Place(PIECE.Knight, COLOR.WHITE);
    }

    static get BKnight() {
        return new Place(PIECE.Knight, COLOR.BLACK);
    }

    static get WBishop() {
        return new Place(PIECE.Bishop, COLOR.WHITE);
    }

    static get BBishop() {
        return new Place(PIECE.Bishop, COLOR.BLACK);
    }

    static get WKing__() {
        return new Place(PIECE.King, COLOR.WHITE);
    }

    static get BKing__() {
        return new Place(PIECE.King, COLOR.BLACK);
    }

    static get WQueen_() {
        return new Place(PIECE.Queen, COLOR.WHITE);
    }

    static get BQueen_() {
        return new Place(PIECE.Queen, COLOR.BLACK);
    }

    static get WPawn__() {
        return new Place(PIECE.Pawn, COLOR.WHITE);
    }

    static get BPawn__() {
        return new Place(PIECE.Pawn, COLOR.BLACK);
    }

    static get XXXXXXX() {
        return null;
    }

}

class ChessBoard {
    chess: any[][];
    hash: number;

    constructor() {
        this.chess = [
            [Place.BRook__, Place.BKnight, Place.BBishop, Place.BKing__, Place.BQueen_, Place.BBishop, Place.BKnight, Place.BRook__],
            [Place.BPawn__, Place.BPawn__, Place.BPawn__, Place.BPawn__, Place.BPawn__, Place.BPawn__, Place.BPawn__, Place.BPawn__],
            [Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX],
            [Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX],
            [Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX],
            [Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX, Place.XXXXXXX],
            [Place.WPawn__, Place.WPawn__, Place.WPawn__, Place.WPawn__, Place.WPawn__, Place.WPawn__, Place.WPawn__, Place.WPawn__],
            [Place.WRook__, Place.WKnight, Place.WBishop, Place.WKing__, Place.WQueen_, Place.WBishop, Place.WKnight, Place.WRook__],
        ]
        this.hash = this.hashCode;
    }

    get hashCode(): number {
        let hash = 0;

        for (let i = 0; i < this.chess.length; i++) {
            for (let j = 0; j < this.chess[0].length; j++) {
                let cellState = new CellState(this.chess[i][j], new Coords(i, j));
                hash ^= cellState.hashCode();
            }
        }

        return hash;
    }

}