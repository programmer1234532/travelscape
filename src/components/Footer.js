import React from 'react';
import {
    Center,
    Container,
    LeftSide,
    RightSide,
    TopPart,
    Line,
    MidPart,
    Links,
    ItemInfo,
    LinkItemInfo,
    MidPart2,
    SocialMedia,
    SocialMediaInfo,
    VerticalLine,
    LowerPart,
    NewsLetter,
    LowPart,
    Input,
    Inputs,
    Button,
    TopPart2,
    Title,
    SocialMediaLink,
    Paragraph,
} from './Footer.elements';

const Footer = () => {
    return (
        <Container>
            <LeftSide>
                <TopPart>
                    <Line />
                </TopPart>
                <MidPart>
                    <Links>
                        <ItemInfo>
                            <LinkItemInfo></LinkItemInfo>
                        </ItemInfo>
                        <ItemInfo>
                            <LinkItemInfo></LinkItemInfo>
                        </ItemInfo>
                        <ItemInfo>
                            <LinkItemInfo></LinkItemInfo>
                        </ItemInfo>
                    </Links>
                </MidPart>
            </LeftSide>
            <Center>
                <TopPart2>
                    <Title>TRAVELSCAPE</Title>
                </TopPart2>
                <MidPart2>
                    <SocialMedia>
                        <SocialMediaInfo>
                            <SocialMediaLink></SocialMediaLink>
                        </SocialMediaInfo>
                        <SocialMediaInfo>
                            <SocialMediaLink></SocialMediaLink>
                        </SocialMediaInfo>
                        <SocialMediaInfo>
                            <SocialMediaLink></SocialMediaLink>
                        </SocialMediaInfo>
                    </SocialMedia>
                    <VerticalLine></VerticalLine>
                    <LowerPart>
                        <NewsLetter></NewsLetter>
                    </LowerPart>
                </MidPart2>
                <LowPart>
                    <Inputs>
                        <Input></Input>
                        <Button></Button>
                    </Inputs>
                    <Paragraph></Paragraph>
                </LowPart>
            </Center>
            <RightSide>
                <TopPart>
                    <Line />
                </TopPart>
                <MidPart>
                    <Links>
                        <ItemInfo>
                            <LinkItemInfo></LinkItemInfo>
                        </ItemInfo>
                        <ItemInfo>
                            <LinkItemInfo></LinkItemInfo>
                        </ItemInfo>
                        <ItemInfo>
                            <LinkItemInfo></LinkItemInfo>
                        </ItemInfo>
                    </Links>
                </MidPart>
            </RightSide>
        </Container>
    );
};
export default Footer;
