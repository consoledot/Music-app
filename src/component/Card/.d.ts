import React from "react";

interface CardProps {
  image: string;
  type: "Single" | "Playlist" | "Album";
  id: number;
  title: string;
  onClick?: VoidFunction;
  artist: {
    name: string;
    id: number;
  };
  playAction: VoidFunction;
}

declare const Card: React.FC<CardProps>;

export default Card;
