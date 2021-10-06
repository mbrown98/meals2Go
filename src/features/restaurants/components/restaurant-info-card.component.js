import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant Test 2",
    icon,
    photos = [
      "https://media.istockphoto.com/photos/dinner-picture-id185109733?b=1&k=20&m=185109733&s=170667a&w=0&h=PpPlmIKM3Vdn9cRFAsEV9yigpqPJ_jJ1BXE7iiyyxiA=",
    ],
    address = "2100 Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

// STYLES
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;
