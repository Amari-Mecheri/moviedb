import React from "react";
import { Link } from "react-router-dom";

//styles
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ image, title, text, movieId }) => {
  return (
    <Link to={`/${movieId}`}>
      <Wrapper image={image}>
        <Content>
          <Text>
            <h1>{title}</h1>
            <p>{text}</p>
          </Text>
        </Content>
      </Wrapper>
    </Link>
  );
};

export default HeroImage;
