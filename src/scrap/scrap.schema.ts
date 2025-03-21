import { Schema, Document, model } from 'mongoose';

export const ScrapSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  usernickname: { type: String, required: true }, // 추가
  profilePicture: { type: String, required: false }, // 추가
  articleId: { type: Schema.Types.ObjectId, required: true },
  highlightedText: { type: String },
  myemoji: { type: String },
  followerEmojis: [
    {
      userId: { type: Schema.Types.ObjectId, required: true },
      emoji: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export interface Scrap extends Document {
  title: string;
  url: string;
  date: string;
  userId: string;
  usernickname: string; // 추가
  profilePicture: string; // 추가
  articleId: string;
  highlightedText: string;
  myemoji: string;
  followerEmojis: { userId: string; emoji: string }[];
  createdAt: Date;
  updatedAt: Date;
}
export const ScrapModel = model<Scrap>('Scrap', ScrapSchema);
