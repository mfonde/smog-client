export class ReviewData {
    constructor (
        public movieTitle: string,
        public poster: string,
        public userId: number,
        public username: string,
        public reviewRating: number,
        public reviewText: string,
        public imdbId: string,
        public id: number,
    ){}
}