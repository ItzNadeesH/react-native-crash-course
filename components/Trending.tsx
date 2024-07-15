import { View, Text, FlatList } from "react-native";
import React from "react";

interface Post {
  id: number;
}

interface Props {
  posts: Post[];
}

const Trending = ({ posts }: Props) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item: any) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;
