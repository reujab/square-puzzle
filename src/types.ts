// named iPuzzle to prevent naming conflicts
export interface iPuzzle {
	revealedCorner: boolean
	solved: string[][][]
	shuffled: string[][][]
}

export interface Settings {
	borders: boolean
	labelSquares: boolean
	revealCorner: boolean

	shuffled: boolean
}
