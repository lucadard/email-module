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
import tailwindConfig from "@/tailwind.config";

const InviteEmail = () => (
  <Tailwind config={tailwindConfig}>
    <Html>
      <Head />
      <Preview>Invitation to join {`{companyName}`}</Preview>
      <Body className="bg-background font-sans">
        <Container className="mx-auto py-12">
          <Header />
          <Section className="text-md rounded-md bg-white px-8 py-4 text-text">
            <Text>Hi {`{name}`},</Text>
            <Text>
              You’ve been invited to join {`{companyName}`} as a Team Member
              {`{role}`}! 🎉
            </Text>
            <Text>{`{roleDescription}`}</Text>

            <Container className="py-5 flex justify-center">
              <Row className="w-min">
                <Column>
                  <Container className="size-12 bg-secondary rounded-lg p-px">
                    <Img
                      className="size-12 rounded-lg object-cover"
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
                className="mt-6 box-border rounded-lg bg-primary px-10 py-3 text-center font-semibold text-primary-foreground"
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
