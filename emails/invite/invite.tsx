import React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Header } from "@/common/header";
import { Footer } from "@/common/footer";

const InviteEmail = () => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>{"New email from {name}"}</Preview>
      <Body className="bg-zinc-50 font-sans">
        <Container className="mx-auto py-12">
          <Header />
          <Section className="text-md rounded-[5px] bg-white px-8 py-4 text-[#27282C]">
            <Text>Hi {`{name}`},</Text>
            <Text>
              You’ve been invited to join {`{companyName}`} as a Team Member
              {`{role}`}! 🎉
            </Text>
            <Text>{`{roleDescription}`}</Text>

            <Container className="py-[20px] flex justify-center">
              <Row className="w-min">
                <Column>
                  <Container className="size-[49px] bg-[#E5E5E5] rounded-[8px] p-[1px]">
                    <Img
                      className="size-[49px] rounded-[8px] object-cover"
                      src={`{companyAvatarUrl}`}
                      alt={`{companyName} logo`}
                    />
                  </Container>
                </Column>
                <Column className="pl-3">
                  <Text className="!my-0 font-[700] whitespace-nowrap">
                    {`{companyName}`}
                  </Text>
                </Column>
              </Row>
              <Button
                className="mt-6 box-border rounded-[8px] bg-[#5353F5] px-[42px] py-[12px] text-center font-semibold text-white"
                href={`{acceptInvitationUrl}`}
              >
                Accept Invitation
              </Button>
            </Container>

            <Text>
              If you have any questions, feel free to reach out. We’re excited
              to have you on board!
            </Text>
            <Text className="font-semibold !mb-0">Best,</Text>
            <Text className="font-semibold !mt-0">The Betterness Team</Text>
          </Section>
          <Footer />
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default InviteEmail;
